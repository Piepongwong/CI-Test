var assert = require('chai').assert
var request = require('request');

describe('Homepage', function() {
  describe('Status', function() {
    it('should return status code 200', function() {
     request("http://localhost:3000", function(error, response, body) {
     	console.log(body)
      assert.equal(response.statusCode.indexOf(200), -1);     	
     })
    });
  });
});