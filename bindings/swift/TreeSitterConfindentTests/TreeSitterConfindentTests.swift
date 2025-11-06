import XCTest
import SwiftTreeSitter
import TreeSitterConfindent

final class TreeSitterConfindentTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_confindent())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Confindent grammar")
    }
}
