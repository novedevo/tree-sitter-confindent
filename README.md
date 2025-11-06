# tree-sitter-confindent

Extremely basic tree-sitter grammar for the [confindent](https://github.com/gennyble/confindent) configuration language.
This grammar does not consider the fundamental point of confindent, namely indentation-sensitive nesting.
It does distinguish between keys and values at a basic level, though, and should be sufficient for syntax highlighting.

### Notes

tree-sitter is rather hostile to indentation-sensitive (i.e. context-sensitive) grammars, such as confindent.
If I were to add full parsing support, I apparently would have to write my own partial lexer in C.
This does not especially appeal to me, but if you are interested, feel free to file a change request.

### How to use

To get syntax highlighting in the `helix` editor, clone this repository somewhere
and use the provided example config in the `helix` subdirectory. Replace the example path with
the path to this repository, and copy the config to your helix config folder (typically ./config/helix/).
You may have to run `hx --grammar fetch` and/or `hx --grammar build`, which will need a C compiler.
If you use nix, the devshell defined in the flake in this project should be sufficient.

Instead of cloning this repo, you could instead just use `source.git` and link to this git repository on the web.

At some point, I may make a vscode extension. Probably there already exists a tree-sitter compatible extension you could use.
Maybe I'll make a TextMate grammar, as vscode's syntax highlighting API seems to prefer this.
