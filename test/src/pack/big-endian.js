/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/byte-data
 *
 */

let assert = require('assert');
let byteData = require('../../../test/loader.js');

let uInt16BE = byteData.types.uInt16BE;
let uInt16 = byteData.types.uInt16;
let uInt24BE = byteData.types.uInt24BE;
let int24BE = byteData.types.int24BE;
let uInt24 = byteData.types.uInt24;
let int24 = byteData.types.int24;
let uInt32BE = byteData.types.uInt32BE;
let uInt32 = byteData.types.uInt32;
let uInt40BE = byteData.types.uInt40BE;
let uInt40 = byteData.types.uInt40;
let uInt48BE = byteData.types.uInt48BE;
let uInt48 = byteData.types.uInt48;
let float64BE = byteData.types.float64BE;

describe('pack LE and BE', function() {
    
    // 16-bit
    it('should turn 2 16-bit unsigned ints to 2 bytes BE (0s)', function() {
        assert.deepEqual(
            byteData.packArray([0, 0], uInt16BE),
            [0, 0, 0, 0]);
    });
    it('should turn 2 16-bit unsigned ints to 2 bytes LE (1s)', function() {
        assert.deepEqual(
            byteData.packArray([1, 1], uInt16),
            [1, 0, 1, 0]);
    });
    it('should turn 2 16-bit unsigned ints to 2 bytes BE (1s)', function() {
        assert.deepEqual(
            byteData.packArray([1, 1], uInt16BE),
            [0, 1, 0, 1]);
    });

    // 24-bit
    it('should turn 2 24-bit unsigned ints to 6 bytes BE (0s)', function() {
        assert.deepEqual(
            byteData.packArray([0, 0], int24BE),
            [0, 0, 0, 0, 0, 0]);
    });
    it('should turn 2 24-bit unsigned ints to 6 bytes LE (1s)', function() {
        assert.deepEqual(
            byteData.packArray([1, 1], int24),
            [1, 0, 0, 1, 0, 0]);
    });
    it('should turn 2 24-bit unsigned ints to 6 bytes BE (1s)', function() {
        assert.deepEqual(
            byteData.packArray([1, 1], int24BE),
            [0, 0, 1, 0, 0, 1]);
    });
    it('should turn 2 24-bit unsigned ints to 6 bytes BE (max range)', function() {
        assert.deepEqual(
            byteData.packArray([-8388608, 8388607], int24BE),
            [128,0,0, 127, 255, 255]);
    });
    it('should turn 2 24-bit unsigned ints to 6 bytes BE', function() {
        assert.deepEqual(
            byteData.packArray([-8388608, 1, 8388607], int24BE),
            [128,0,0 , 0,0,1, 127, 255, 255]);
    });

    // 32-bit
    it('should turn 2 32-bit unsigned ints to 8 bytes BE (0s)', function() {
        assert.deepEqual(
            byteData.packArray([0, 0], uInt32BE),
            [0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('should turn 2 32-bit unsigned ints to 8 bytes LE (1s)', function() {
        assert.deepEqual(
            byteData.packArray([1, 1], uInt32),
            [1, 0, 0, 0, 1, 0, 0, 0]);
    });
    it('should turn 2 32-bit unsigned ints to 8 bytes BE (1s)', function() {
        assert.deepEqual(
            byteData.packArray([1, 1], uInt32BE),
            [0, 0, 0, 1, 0,0, 0, 1]);
    });

    // 40-bit
    it('should turn 2 40-bit unsigned ints to 10 bytes BE (0s)', function() {
        assert.deepEqual(
            byteData.packArray([0, 0], uInt40BE),
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('should turn 2 40-bit unsigned ints to 10 bytes LE (1s)', function() {
        assert.deepEqual(
            byteData.packArray([1, 1], uInt40),
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
    });
    it('should turn 2 40-bit unsigned ints to 10 bytes BE (1s)', function() {
        assert.deepEqual(
            byteData.packArray([1, 1], uInt40BE),
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    });

    // 48-bit
    it('should turn 2 48-bit unsigned ints to 12 bytes BE (0s)', function() {
        assert.deepEqual(
            byteData.packArray([0, 0], uInt48BE),
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('should turn 2 48-bit unsigned ints to 12 bytes LE (1s)', function() {
        assert.deepEqual(
            byteData.packArray([1, 1], uInt48),
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    });
    it('should turn 2 48-bit unsigned ints to 12 bytes BE (1s)', function() {
        assert.deepEqual(
            byteData.packArray([1, 1], uInt48BE),
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    });
    it('should turn 1 48-bit unsigned ints to 6 bytes hex BE (120637438355317)', function() {
        assert.deepEqual(
            byteData.packArray([120637438355317], uInt48BE),
            [109, 184, 23, 168, 231, 117]);
    });
    it('should turn 1 48-bit unsigned ints to 6 bytes hex BE (120637438355317)', function() {
        assert.deepEqual(
            byteData.packArray([120637438355317, 1, 1], uInt48BE),
            [109, 184, 23, 168, 231, 117, 
            0, 0, 0, 0, 0, 1, 
            0, 0, 0, 0, 0, 1]);
    });

    // 64-bit
    it('should turn 1 64-bit float to 8 bytes BE (pi)', function() {
        assert.deepEqual(
            byteData.packArray([3.141592653589793], float64BE),
            [64, 9, 33, 251, 84, 68, 45, 24]);
    });

});
