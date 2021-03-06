/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/byte-data
 *
 */

let assert = require('assert');
let byteData = require('../../../test/loader.js');
let uInt53 = {"bits": 53};

describe('53-bit to bytes', function() { 
    
    it('should turn 1 unsigned 53-bit int to 7 bytes (hex) (max range)', function() {
        assert.deepEqual(
            byteData.packArray([9007199254740991], uInt53, 16),
            [255, 255, 255, 255, 255, 255, 31]); 
    });
    it('should turn 1 unsigned 53-bit int to 7 bytes (0)', function() {
        assert.deepEqual(
            byteData.packArray([0], uInt53),
            [0,0,0,0,0,0,0]);
    });
});
