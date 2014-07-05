var assert = require('assert');

var report = require('..');

describe('reporter', function(){
    it('should log', function(){
        assert.equal(report('Something.'), void 0);
    });
});
