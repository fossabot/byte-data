/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/byte-data
 *
 */

let assert = require('assert');
let byteData = require('../../../test/loader.js');

describe('pack uInt40', function() { 
    
    it('should turn 5 bytes (hex) to 1 signed 40-bit int  (max range)', function() {
        assert.deepEqual(
            byteData.packArray([549755813887], byteData.types.uInt40, 16),
            [255,255,255,255,127]);
    });
    it('should turn 5 bytes (hex) to 1 signed 40-bit int  (949752813887)', function() {
        assert.deepEqual(
            byteData.packArray([949752813887], byteData.types.uInt40, 16),
            [63, 217, 173, 33, 221]);
    });  
    it('should turn 1 unsigned 40-bit int to 5 bytes (hex) (max range)', function() {
        assert.deepEqual(
            byteData.packArray([1099511627775], byteData.types.uInt40, 16),
            [255,255,255,255,255]);
    });
    it('should turn 1 unsigned 40-bit int to 5 bytes (max range)', function() {
        assert.deepEqual(
            byteData.packArray([1099511627775], byteData.types.uInt40),
            [255,255,255,255,255]);
    });
    it('should turn 1 unsigned 40-bit int to 5 bytes in a Uint8Array (max range)', function() {
        assert.deepEqual(
            byteData.packArray([1099511627775], byteData.types.uInt40),
            [255,255,255,255,255]);
    });
});
