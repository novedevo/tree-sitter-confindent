package tree_sitter_confindent_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_confindent "tangled.org/@nove.dev/tree-sitter-confindent/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_confindent.Language())
	if language == nil {
		t.Errorf("Error loading Confindent grammar")
	}
}
