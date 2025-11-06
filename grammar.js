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
    source_file: $ => repeat($._definition),

    definition: $ => seq($.key, $.value),

    key: $ => /[^ \t]+/,

    value: $ => optional($._simple_value),

    _simple_value: $ => /[^\n]+/,
  }
});
