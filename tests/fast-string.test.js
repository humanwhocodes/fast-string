/**
 * @fileoverview Tests for the fast-string functions.
 */
/*global describe, it*/

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

import { compare, equals } from "../src/fast-string.js";
import assert from "node:assert";

//-----------------------------------------------------------------------------
// Tests
//-----------------------------------------------------------------------------

describe("fast-string", () => {

    describe("compare()", () => {

        it("should return 0 when strings are identical", () => {
            assert.strictEqual(compare("", ""), 0);
            assert.strictEqual(compare("a", "a"), 0);
            assert.strictEqual(compare("hello", "hello"), 0);
            assert.strictEqual(compare("Hello World!", "Hello World!"), 0);
        });

        it("should return a negative number when first string comes before second", () => {
            assert.ok(compare("a", "b") < 0);
            assert.ok(compare("a", "z") < 0);
            assert.ok(compare("abc", "abd") < 0);
            assert.ok(compare("abc", "abcd") < 0);
        });

        it("should return a positive number when first string comes after second", () => {
            assert.ok(compare("b", "a") > 0);
            assert.ok(compare("z", "a") > 0);
            assert.ok(compare("abd", "abc") > 0);
            assert.ok(compare("abcd", "abc") > 0);
        });

        it("should throw TypeError when first argument is not a string", () => {
            assert.throws(() => compare(null, "hello"), TypeError);
            assert.throws(() => compare(undefined, "hello"), TypeError);
            assert.throws(() => compare(123, "hello"), TypeError);
            assert.throws(() => compare(true, "hello"), TypeError);
            assert.throws(() => compare({}, "hello"), TypeError);
        });

        it("should throw TypeError when second argument is not a string", () => {
            assert.throws(() => compare("hello", null), TypeError);
            assert.throws(() => compare("hello", undefined), TypeError);
            assert.throws(() => compare("hello", 123), TypeError);
            assert.throws(() => compare("hello", true), TypeError);
            assert.throws(() => compare("hello", {}), TypeError);
        });
    });

    describe("equals()", () => {

        it("should return true when strings are identical", () => {
            assert.strictEqual(equals("", ""), true);
            assert.strictEqual(equals("a", "a"), true);
            assert.strictEqual(equals("hello", "hello"), true);
            assert.strictEqual(equals("Hello World!", "Hello World!"), true);
        });

        it("should return false when strings are different", () => {
            assert.strictEqual(equals("a", "b"), false);
            assert.strictEqual(equals("hello", "Hello"), false);
            assert.strictEqual(equals("abc", "abd"), false);
        });

        it("should return false when strings have different lengths", () => {
            assert.strictEqual(equals("abc", "abcd"), false);
            assert.strictEqual(equals("abc", "ab"), false);
            assert.strictEqual(equals("", "a"), false);
        });

        it("should return false when first argument is not a string", () => {
            assert.strictEqual(equals(null, "hello"), false);
            assert.strictEqual(equals(undefined, "hello"), false);
            assert.strictEqual(equals(123, "hello"), false);
            assert.strictEqual(equals(true, "hello"), false);
            assert.strictEqual(equals({}, "hello"), false);
            assert.strictEqual(equals([], "hello"), false);
        });

        it("should return false when second argument is not a string", () => {
            assert.strictEqual(equals("hello", null), false);
            assert.strictEqual(equals("hello", undefined), false);
            assert.strictEqual(equals("hello", 123), false);
            assert.strictEqual(equals("hello", true), false);
            assert.strictEqual(equals("hello", {}), false);
            assert.strictEqual(equals("hello", []), false);
        });

        it("should return false when neither argument is a string", () => {
            assert.strictEqual(equals(null, null), false);
            assert.strictEqual(equals(123, 123), false);
            assert.strictEqual(equals({}, {}), false);
            assert.strictEqual(equals([], []), false);
        });
    });
});
