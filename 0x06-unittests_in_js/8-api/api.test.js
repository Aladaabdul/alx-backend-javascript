// api test


const app = require("./api.js");
const chai = require("chai");
const expect = chai.expect
const request = require("request");


describe("Api testing...", () => {
	let server;

	before((done) => {
		server = app.listen(done);
	});

	after((done) => {
		server.close(done);
	});

	it("should return 200", (done) => {
		request.get('http://localhost:7865', (error, response, body) => {
			if (error) return done(error);
			expect(response.statusCode).to.equal(200);
			expect(body).to.equal("Welcome to the payment system");
			done();
		});
	});
});
