/**
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/byte-data
 *
 */

let expect = require("chai").expect;
let byteData = require('../../test/loader.js');
let testFunc;
let typeError = "Not a supported type.";
let floatTypeError = "Not a supported float type.";

describe('Errors', function() {

    // strings
    it("String overflow in array", function () {
        testFunc = function() {
            byteData.packArray(["abcde"], {"char": true, "bits": 32});
        };
        expect(testFunc).to.throw("String is bigger than its type definition.");
    });
    it("String underflow in array", function () {
        testFunc = function() {
            byteData.packArray(["abc"], {"char": true, "bits": 32});
        };
        expect(testFunc).to.throw("String is smaller than its type definition.");
    });
    it("String overflow", function () {
        testFunc = function() {
            byteData.pack("abcde", {"char": true, "bits": 32});
        };
        expect(testFunc).to.throw("String is bigger than its type definition.");
    });
    it("String underflow", function () {
        testFunc = function() {
            byteData.pack("abc", {"char": true, "bits": 32});
        };
        expect(testFunc).to.throw("String is smaller than its type definition.");
    });
    it("string with odd number of bits", function () {
        testFunc = function() {
            byteData.pack("a", {"char": true, "bits": 9});
        };
        expect(testFunc).to.throw("Wrong offset for type char.");
    });
    it("char with less than 8 bits", function () {
        testFunc = function() {
            byteData.pack("a", {"char": true, "bits": 7});
        };
        expect(testFunc).to.throw("Wrong offset for type char.");
    });

    // null and undefined
    it("null value", function () {
        testFunc = function() {
            byteData.pack(null, {"bits": 8});
        };
        expect(testFunc).to.throw("Cannot pack null or undefined values.");
    });
    it("undefined value", function () {
        testFunc = function() {
            byteData.pack(undefined, {"bits": 8});
        };
        expect(testFunc).to.throw("Cannot pack null or undefined values.");
    });

    // overflow and underflow
    it("8-bit overflow", function () {
        testFunc = function() {
            byteData.pack(256, {"bits": 8});
        };
        expect(testFunc).to.throw("Overflow.");
    });
    it("8-bit underflow", function () {
        testFunc = function() {
            byteData.pack(-1, {"bits": 8});
        };
        expect(testFunc).to.throw("Underflow.");
    });
    
    // Invalid types
    it("More than 64 bits", function () {
        testFunc = function() {
            byteData.pack(2);
        };
        expect(testFunc).to.throw("Undefined type.");
    });
    it("More than 64 bits", function () {
        testFunc = function() {
            byteData.pack(2, {"bits": 65});
        };
        expect(testFunc).to.throw(typeError);
    });
    it("Less than 1 bit (0)", function () {
        testFunc = function() {
            byteData.pack(2, {"bits": 0});
        };
        expect(testFunc).to.throw(typeError);
    });
    it("Less than 1 bit (-1)", function () {
        testFunc = function() {
            byteData.pack(2, {"bits": -1});
        };
        expect(testFunc).to.throw(typeError);
    });
    it("17 float (-1)", function () {
        testFunc = function() {
            byteData.pack(2, {"bits": 17, "float": true});
        };
        expect(testFunc).to.throw(floatTypeError);
    });
});
