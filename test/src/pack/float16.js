/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/byte-data
 *
 */

let assert = require('assert');
let byteData = require('../../../test/loader.js');

describe('pack float16', function() { 
    
    it('should turn 2 bytes to 1 16-bit float (0)', function() {
        assert.deepEqual(
            byteData.packArray([0], byteData.types.float16, 16),
            [0, 0]);
    });
    it('should turn 2 bytes hex to 1 16-bit float (0)', function() {
        assert.deepEqual(
            byteData.packArray([0], byteData.types.float16, 16),
            [0, 0]);
    });
    it('should turn 2 bytes bin to 1 16-bit float (0)', function() {
        assert.deepEqual(
            byteData.packArray([0], byteData.types.float16, 2),
            [0, 0]);
    });
    it('should turn 2 bytes hex to 1 16-bit float (1)', function() {
        assert.deepEqual(
            byteData.packArray([1], byteData.types.float16, 16),
            [0, 60]);
    });
    it('should turn 2 bytes hex to 1 16-bit float (1/3)', function() {
        assert.deepEqual(
            byteData.packArray([0.33325], byteData.types.float16, 16),
            [85,53]);
    });
    it('should turn 2 bytes hex to 1 16-bit float (-2)', function() {
        assert.deepEqual(
            byteData.packArray([-2], byteData.types.float16, 16),
            [0, 192]);
    });
    it('should turn 2 bytes hex to 1 16-bit float (65504)', function() {
        assert.deepEqual(
            byteData.packArray([100], byteData.types.float16, 16),
            [64, 86]);
    });
    it('should turn 2 bytes hex to 1 16-bit float (65504)', function() {
        assert.deepEqual(
            byteData.packArray([500], byteData.types.float16, 16),
            [208, 95]);
    });
    it('should turn 2 bytes hex to 1 16-bit float (65504)', function() {
        assert.deepEqual(
            byteData.packArray([1000], byteData.types.float16, 16),
            [208, 99]);
    });
    it('should turn 2 bytes hex to 1 16-bit float (65504)', function() {
        assert.deepEqual(
            byteData.packArray([10000], byteData.types.float16, 16),
            [226, 112]);
    });
    it('should turn 2 bytes hex to 1 16-bit float (65504)', function() {
        assert.deepEqual(
            byteData.packArray([30000], byteData.types.float16, 16),
            [83, 119]);
    });
    it('should turn 2 bytes hex to 1 16-bit float (65504)', function() {
        assert.deepEqual(
            byteData.packArray([40000], byteData.types.float16, 16),
            [226, 120]);
    });
    it('should turn 2 bytes hex to 1 16-bit float (65504)', function() {
        assert.deepEqual(
            byteData.packArray([65504], byteData.types.float16, 16),
            [255, 123]);
    });
    it('should turn 4 bytes hex to 2 16-bit float (65504, 0.33325, extra byte)', function() {
        assert.deepEqual(
            byteData.packArray(
                [65504, 0.33325], byteData.types.float16, 16),
            [255, 123, 85, 53]);
    });
});
