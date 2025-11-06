{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
  };

  outputs = { self, nixpkgs }:   
  let
    pkgs = import nixpkgs { system = "x86_64-linux"; };
    in {
    devShells.x86_64-linux.default = pkgs.mkShell {
      packages = with pkgs; [
        tree-sitter clang nodejs python3
        #rustc cargo clippy rustfmt inetutils python3
      ];
      #RUST_SRC_PATH = "${pkgs.rust.packages.stable.rustPlatform.rustLibSrc}";
    };
  };
}
