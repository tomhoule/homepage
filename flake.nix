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
          sha256 = "sha256-SfhaPoezSbO4oduaA02iKD9NHzey7keNd+VXNtgNYeA=";
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

            deploy () {
              export DEPLOY_DIR=`mktemp -d`

              echo 'Building...'
              nix build

              echo 'Copying to new empty dir...'
              cp -r result/* $DEPLOY_DIR

              echo 'Publishing...'
              git init $DEPLOY_DIR
              git -C $DEPLOY_DIR add $DEPLOY_DIR
              git -C $DEPLOY_DIR commit -m "Deploy"
              git \
                -C $DEPLOY_DIR \
                push \
                --force \
                'git@github.com:tomhoule/tomhoule.github.io' \
                main
              echo 'Done'
            }

            linkCupper
          '';
        };
      });
}
