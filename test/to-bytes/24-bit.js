
var assert = require('assert');

describe('24-bit to bytes', function() {
    
    let byteData = require('../../index.js');

    // 24-bit / 3 bytes 
    // signed
    it('should turn 2 signed 24-bit ints to 6 bytes (max range)', function() {
        assert.deepEqual(byteData.intTo3Bytes(
            [-8388608, 8388607]),
            [0,0,128,255,255,127]
        );
    });
    it('should turn 1 signed 24-bit int to 3 bytes hex (16777215)', function() {
        assert.deepEqual(byteData.intTo3Bytes(
            [16777215], 16),
            ["ff","ff","ff"]
        );
    });
    it('should turn 2 signed 24-bit ints to 6 bytes (0s)', function() {
        assert.deepEqual(byteData.intTo3Bytes(
            [0, 0]),
            [0, 0, 0, 0, 0, 0]
        );
    });
    it('should turn 2 unsigned 24-bit ints to 6 bytes (max range)', function() {
        assert.deepEqual(byteData.intTo3Bytes(
            [0, 16777215]),
            [0,0,0,255,255,255]
        );
    });
    it('should turn 2 unsigned 24-bit ints to 6 bytes (0s)', function() {
        assert.deepEqual(byteData.intTo3Bytes(
            [0, 0]),
            [0, 0, 0, 0, 0, 0]
        );
    });
});