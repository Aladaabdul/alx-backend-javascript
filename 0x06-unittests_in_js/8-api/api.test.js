// api test


const chai = require("chai");
const expect = chai.expect
const request = require("request");

let app;

describe('API integration test', () => {

  const API_URL = 'http://localhost:7865';

  beforeEach(function() {
	  app = require("./api.js");
  });
  
  afterEach(function() {
	  app.close
  });

  it('GET / returns correct response', () => {
	  request.get(`${API_URL}/`, function (error, response, body) {
		  expect(response.statusCode).to.be.equal(200);
		  expect(body).to.be.equal('Welcome to the payment system');
	  });
  });
});
