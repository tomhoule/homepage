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
        inherit (pkgs) hugo stdenv;
        cupper = pkgs.fetchgit {
          url = "https://github.com/tomhoule/cupper-hugo-theme";
          sha256 = "sha256-Z3/tJCiiZLGuVtuch2UeBuXDyNM4g0EH0euoHrnrfZw=";
        };
      in
      {
        defaultPackage = stdenv.mkDerivation {
          pname = "tomhoule.com";
          version = "1.0.0";
          buildInputs = [ hugo ];

          # https://nix.dev/anti-patterns/language#reproducibility-referencing-top-level-directory-with
          src = builtins.path { path = ./.; name = "tomhoule.com"; };

          buildPhase = "bash ${./builder.sh}";
          installPhase = "echo 'Install phase: skipped'";

          inherit system cupper;
        };
        devShell = pkgs.mkShell {
          inputsFrom = [ self.defaultPackage."${system}" ];
          shellHook = ''
            linkCupper () {
              mkdir themes 2> /dev/null
              echo -n 'Installing cupper...'
              ln -sfn ${cupper} ./themes/cupper-hugo-theme
              echo 'ok'
            }

            linkCupper
          '';
        };
      });
}
