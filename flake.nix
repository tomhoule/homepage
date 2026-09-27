{
  description = "tomhoule.com";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        packages.default = pkgs.rustPlatform.buildRustPackage {
          pname = "tomhoule.com";
          version = "1.0.0";
          cargoLock.lockFile = ./Cargo.lock;
          nativeBuildInputs = [ pkgs.typst pkgs.python3 ];
          cargoBuildFlags = [ "-p" "generator" ];

          # https://nix.dev/anti-patterns/language#reproducibility-referencing-top-level-directory-with
          src = builtins.path { path = ./.; name = "tomhoule.com"; };

          installPhase = ''
            mkdir -p "$out"
            target/${pkgs.stdenv.hostPlatform.config}/release/generator "$out"
            python3 scripts/check_site.py "$out"
          '';
        };
        packages.deploy-website = pkgs.writeShellApplication {
          name = "deploy-website";
          text = ''
            set -euo pipefail
            DEPLOY_DIR=$(mktemp -d)

            echo 'Copying to new empty dir...'
            cp -r ${self.packages."${system}".default}/* "$DEPLOY_DIR"

            echo 'Publishing...'
            git init "$DEPLOY_DIR"
            git -C "$DEPLOY_DIR" add "$DEPLOY_DIR"
            git -C "$DEPLOY_DIR" commit -m "Deploy"
            git \
              -C "$DEPLOY_DIR" \
              push \
              --force \
              'git@github.com:tomhoule/tomhoule.github.io' \
              main
            echo 'Done'
          '';
        };

        devShells.default = pkgs.mkShell {
          packages = [ pkgs.cargo pkgs.rustc pkgs.typst pkgs.just pkgs.watchexec pkgs.python3 pkgs.zig ];
        };
      });
}
