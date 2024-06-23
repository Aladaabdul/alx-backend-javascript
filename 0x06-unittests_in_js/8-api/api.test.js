// api test


const chai = require("chai");
const expect = chai.expect
const request = require("request");
const app = require("./api.js");

describe('API integration test', () => {
  let server

  const API_URL = 'http://localhost:7865';

  beforeEach(function() {
	  server = app.listen(7865, done);
  });
  
  afterEach(function() {
	  server.close(done);
  });

  it('GET / returns correct response', (done) => {
	  request.get(`${API_URL}/`, function (error, response, body) {
		  if (error) return done(error);
		  expect(response.statusCode).to.be.equal(200);
		  expect(body).to.be.equal('Welcome to the payment system');
		  done();
	  });
  });
});
