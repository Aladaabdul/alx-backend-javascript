// 6-payment_token.test.js


const getPaymentTokenFromAPI = require("./6-payment_token.js");
const chai = require("chai");
const expect = chai.expect;


describe("AsyncTest", function() {

	it("return True if true is passed in", function(done) {
		getPaymentTokenFromAPI(true).then(response => {
			expect(response).to.deep.equal({data: 'Successful response from the API' });
			done();
		}).catch(error => done(error))
	});
});
