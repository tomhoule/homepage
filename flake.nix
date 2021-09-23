{
  description = "tomhoule.com";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages."${system}";
        src = ./.;
        hugo = pkgs.hugo;
        coreutils = pkgs.coreutils;
      in {
        defaultPackage = derivation {
            name = "tomhoule.com";
            builder = "${pkgs.bash}/bin/bash";
            args = [ ./builder.sh ];
            system = system;

            inherit hugo src coreutils;
        };
        devShell = pkgs.mkShell {
          buildInputs = [ hugo ];
        };
      });
}
