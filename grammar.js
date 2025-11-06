/**
 * @file tree-sitter implementation for the Confindent configuration language
 * @author Devon Sawatsky <devon@nove.dev>
 * @license ISC
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "confindent",

  rules: {
    // TODO: add external scanner for proper child support (dedents...)
    source_file: $ => repeat($.definition),

    definition: $ => seq($.key, optional($.value), /\n/),

    key: $ => /[^ \t]+/,

    value: $ => /[^\n]+/,
  }
});
