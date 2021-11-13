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
        src = ./.;
        inherit (pkgs) hugo coreutils;
        cupper = pkgs.fetchgit {
          url = "https://github.com/tomhoule/cupper-hugo-theme";
          sha256 = "sha256-Z3/tJCiiZLGuVtuch2UeBuXDyNM4g0EH0euoHrnrfZw=";
        };
      in
      {
        defaultPackage = derivation {
          name = "tomhoule.com";
          builder = "${pkgs.bash}/bin/bash";
          args = [ ./builder.sh ];

          inherit hugo src coreutils system cupper;
        };
        devShell = pkgs.mkShell {
          buildInputs = [ hugo ];
          shellHook = ''
            echo 'Installing cupper...'
            cp -r ${cupper} themes/cupper-hugo-theme;
          '';
        };
      });
}
