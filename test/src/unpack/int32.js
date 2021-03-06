/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/byte-data
 *
 */

let assert = require('assert');
let byteData = require('../../../test/loader.js');
let int32 = byteData.types.int32;

describe('unpack int32', function() {

    it('should turn 8 bytes bin to 2 32-bit ints (max range)', function() {
        assert.deepEqual(
            byteData.unpackArray(
                [0,0,0,128,
                255,255,255,127], int32, 2),
            [-2147483648,2147483647]);
    });
    it('should turn 8 bytes hex to 2 32-bit ints (max range)', function() {
        assert.deepEqual(
            byteData.unpackArray(
                [0,0,0,128, 255,255,255,127], int32, 16),
            [-2147483648,2147483647]);
    });
    it('should turn 10 bytes hex to 2 32-bit ints (ignore extra bytes) (max range)', function() {
        assert.deepEqual(
            byteData.unpackArray(
                [0,0,0,128, 255,255,255,127,255,128], int32, 16),
            [-2147483648,2147483647]);
    });
    it('should turn 4 bytes hex to 1 32-bit ints (random negative)', function() {
        assert.deepEqual(
            byteData.unpackArray([232,3,0,128], int32, 16),
            [-2147482648]);
    });

    it('should turn 4 bytes hex to 1 32-bit ints (random negative)', function() {
        assert.deepEqual(
            byteData.unpackArray(
                [0,128,255,255], int32, 16),
            [-32768]);
    });

    // min
    it('min', function() {
        assert.deepEqual(
            byteData.unpackArray([0,0,0,128], byteData.types.int32, 16),
            [-2147483648]);
    });
    // min + 1
    it('min + 1', function() {
        assert.deepEqual(
            byteData.unpackArray([1,0,0,128], byteData.types.int32, 16),
            [-2147483647]
        );
    });
    // min + 2
    it('min + 2', function() {
        assert.deepEqual(
            byteData.unpackArray([2,0,0,128], byteData.types.int32, 16),
            [-2147483646]
        );
    });
    // min + 3
    it('min + 3', function() {
        assert.deepEqual(
            byteData.unpackArray([3,0,0,128], byteData.types.int32, 16),
            [-2147483645]
        );
    });

    // -1
    it('-1', function() {
        assert.deepEqual(
            byteData.unpackArray([255,255,255,255], byteData.types.int32, 16),
            [-1]
        );
    });
    // -2
    it('-2', function() {
        assert.deepEqual(
            byteData.unpackArray([254,255,255,255], byteData.types.int32, 16),
            [-2]
        );
    });
    // -3
    it('-3', function() {
        assert.deepEqual(
            byteData.unpackArray([253,255,255,255], byteData.types.int32, 16),
            [-3]
        );
    });
});
