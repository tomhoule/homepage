+++
title = "Building Rust WASM projects with Nix"
date = "2021-11-13"
slug = "building-rust-wasm-with-nix-flakes"
tags = ["rust", "nix", "wasm"]
draft = false
description = """
Building Rust projects targeting wasm32-unknown-unknown with Nix.
"""
+++

Historically, there have been a number of approaches to the problem of building
Rust projects with Nix[^1]. The most common one these days is
[buildRustPackage](https://github.com/NixOS/nixpkgs/blob/933f117a78af47116a64f3faa71c2264f602c8d7/doc/languages-frameworks/rust.section.md).
It integrates reasonably well with cargo and supports cross-compilation out of
the box, but if you want to build a project targetting
`wasm32-unknown-unknown`, you will not find much help online.

Since I recently had to figure that out for
[prisma-fmt-wasm](https://github.com/prisma/prisma-fmt-wasm/), this will be a
short post walking through a setup that works. The whole working example used
in this post is [on
GitHub](https://github.com/tomhoule/rust-nix-wasm32-unknown-unknown-example).
This post assumes some prior knowledge of Nix[^2] and how to build Rust
projects for `wasm32-unknown-unknown`[^3].

## Initial setup

Let's start a regular Rust project with `cargo new --lib` and write a function
we'll want to expose in `src/lib.rs`:

```
/// Computes the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor)
/// of two integers using Euclid's algorithm.
///
/// ```
/// # use gcd::*;
/// assert_eq!(gcd(3, 3), 3);
/// assert_eq!(gcd(4, 2), 2);
/// assert_eq!(gcd(20, 15), 5);
/// assert_eq!(gcd(-20, 15), 5);
/// assert_eq!(gcd(-20, -15), 5);
/// assert_eq!(gcd(105, 252), 21);
/// assert_eq!(gcd(-48, 18), 6);
/// ```
pub fn gcd(a: i64, b: i64) -> u64 {
    if b == 0 {
        a.unsigned_abs()
    } else {
        gcd(b, a % b)
    }
}
```

`cargo test` confirms that this works.

Next, we write a basic flake, with `buildRustPackage`:

```
{
  description = "Minimal rust wasm32-unknown-unknown example";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; }; in
      {
        defaultPackage = pkgs.rustPlatform.buildRustPackage {
          pname = "gcd";
          version = "1.0.0";
          src = ./.;

          cargoLock = {
            lockFile = ./Cargo.lock;
          };
        };
      }
    );
}
```

Running `nix build` confirms that this works. 

## Manual wasm build

Now we want to build a wasm module from this.

We'll go through the steps manually, without writing a nix derivation first, so
we have a clear picture of what we need:

- We're going to need wasm-bindgen and the wasm-bindgen cli. The wasm-bindgen
  versions need to be aligned between the dependency declaration in
  `Cargo.toml` and the CLI version we use. We'll align on the version of
  wasm-bindgen-cli that is in nixpkgs.

  Let's create a small development shell in the flake for convenience:

  ```
    devShell = pkgs.mkShell {
      packages = [ pkgs.wasm-bindgen-cli ];
    };
  ```

  And test it:

  ```
  xps13.tom.~/src/rust-nix-wasm32-unknown-unknown-example λ nix develop
  warning: Git tree '/home/tom/src/rust-nix-wasm32-unknown-unknown-example' is dirty

  [tom@xps13:~/src/rust-nix-wasm32-unknown-unknown-example]$ wasm-bindgen --version
  wasm-bindgen 0.2.78
  ```

  Great! Now let's add that version to `Cargo.toml`, as well as the
  `crate-type` (as shown in the [wasm-bindgen hello
  world](https://rustwasm.github.io/wasm-bindgen/examples/hello-world.html)).

  ```
  [package]
  name = "gcd"
  version = "0.1.0"
  edition = "2018"
  
  [lib]
  crate-type = ["cdylib"]

  [dependencies]
  wasm-bindgen = "=0.2.78"
  ```

  And let's not forget the annotation in `lib.rs`:

  ```
  use wasm_bindgen::prelude::*;

  // ...

  #[wasm_bindgen::wasm_bindgen]
  pub fn gcd(a: i64, b: i64) -> u64 {
      if b == 0 {
          a.unsigned_abs()
      } else {
          gcd(b, a % b)
      }
  }
  ```

- At this point, if you have a local rust toolchain with the
  `wasm32-unknown-unknown` target installed, you should already be able to
  build the wasm module in the dev shell. But let's be thorough and have a
  local toolchain in our project. For this, we're going to need oxalica's
  [rust-overlay](https://github.com/oxalica/rust-overlay).

  We add a flake input:

  ```
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    rust-overlay = {
      url = "github:oxalica/rust-overlay";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };
  ```

  and use the overlay in our local `pkgs`:

  ```
  let
      overlays = [ rust-overlay.overlay ];
      pkgs = import nixpkgs { inherit system; };
  in
  ```

  We then define which rust toolchain we want. There are several ways to do
  this with rust-overlay, we'll use a toolchain file (it's a format defined by
  rustup, so it's not nix-specific):

  ```
  let
      overlays = [ rust-overlay.overlay ];
      pkgs = import nixpkgs { inherit system overlays; };
      rust = pkgs.rust-bin.fromRustupToolchainFile ./rust-toolchain.toml;
  ```

  and write a `rust-toolchain.toml`:

  ```
  [toolchain]
  channel = "stable"
  components = []
  targets = [ "wasm32-unknown-unknown" ]
  profile = "default"
  ```

- Now let's add the `rust` package we just defined to our dev environment and
  see if we can manually build:

  ```
  xps13.tom.~/src/rust-nix-wasm32-unknown-unknown-example λ nix develop
  warning: Git tree '/home/tom/src/rust-nix-wasm32-unknown-unknown-example' is dirty

  [tom@xps13:~/src/rust-nix-wasm32-unknown-unknown-example]$ cargo build --target=wasm32-unknown-unknown
      Finished dev [unoptimized + debuginfo] target(s) in 0.06s

  [tom@xps13:~/src/rust-nix-wasm32-unknown-unknown-example]$ ls target/wasm32-unknown-unknown/debug/
  build  deps  examples  gcd.d  gcd.wasm  incremental  libgcd.d  libgcd.rlib

  [tom@xps13:~/src/rust-nix-wasm32-unknown-unknown-example]$ wasm-bindgen --target=nodejs --out-dir=tmp target/wasm32-unknown-unknown/debug/gcd.wasm 

  [tom@xps13:~/src/rust-nix-wasm32-unknown-unknown-example]$ ls tmp/
  gcd_bg.wasm  gcd_bg.wasm.d.ts  gcd.d.ts  gcd.js

  [tom@xps13:~/src/rust-nix-wasm32-unknown-unknown-example]$ cat tmp/gcd.d.ts 
  /* tslint:disable */
  /* eslint-disable */
  /**
  * Computes the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor)
  * of two integers using Euclid's algorithm.
  *
  * ```
  * # use gcd::*;
  * assert_eq!(gcd(3, 3), 3);
  * assert_eq!(gcd(4, 2), 2);
  * assert_eq!(gcd(20, 15), 5);
  * assert_eq!(gcd(-20, 15), 5);
  * assert_eq!(gcd(-20, -15), 5);
  * assert_eq!(gcd(252, 105), 21);
  * assert_eq!(gcd(105, 252), 21);
  * assert_eq!(gcd(-48, 18), 6);
  * ```
  * @param {BigInt} a
  * @param {BigInt} b
  * @returns {BigInt}
  */
  export function gcd(a: BigInt, b: BigInt): BigInt;
  ```

  Looks good!

## Adjust the derivation

We now want to translate that into the derivation (the `defaultPackage`). Here,
familiarity with [chapter
6](https://nixos.org/manual/nixpkgs/stable/#chap-stdenv) of the nixpkgs manual
is helpful. We're going to override the default phases of the rust build, and
basically only keep the phases before `buildPhase`, because that is where the
main point of `buildRustPackage` happens, namely the vendoring of dependencies.

This can be discovered again by trial and error from the basic
`buildRustPackage` we had. The bulk of the new code is going to be the `buildPhase`:

```
cargo build --release --target=wasm32-unknown-unknown

echo 'Creating out dir...'
mkdir -p $out/src;

# Optional, of course
echo 'Copying package.json...'
cp ./package.json $out/;

echo 'Generating node module...'
wasm-bindgen \
  --target nodejs \
  --out-dir $out/src \
  target/wasm32-unknown-unknown/release/gcd.wasm;
```

Now `nix build` gets far into the process, it just fails at the install phase. We can just skip it:

```
installPhase = "echo 'Skipping installPhase'";
```

And voilà!

As an extra nicety, you'll notice the `checkPhase` doesn't test anything, so it
can be replaced by something custom like [this shell
script](https://github.com/prisma/prisma-fmt-wasm/blob/d450e30635a01b113dc444305b11cb672439ce00/check.sh).

## Epilogue

The whole working repository for this post is available at
[https://github.com/tomhoule/rust-nix-wasm32-unknown-unknown-example](https://github.com/tomhoule/rust-nix-wasm32-unknown-unknown-example).

This is not straightforward as it should be. The whole process works could be
further streamlined and automated. On the other hand, I take this as a credit
to Nix that something like this is possible, supported, and relatively clean.


[^1]: See the "Building Rust packages section" on the [NixOS wiki](https://nixos.wiki/wiki/Rust).
[^2]: [nix.dev](https://nix.dev/) is a helpful resource if you are curious about Nix and
  want to learn what it's about.
[^3]: The [wasm-bindgen guide](https://rustwasm.github.io/docs/wasm-bindgen/)
  is a good resource to learn that.
