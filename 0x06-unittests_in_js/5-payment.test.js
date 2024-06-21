// 5-payment.test.js


const sendPaymentRequestToAPI = require("./5-payment");
const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

describe('hooks', function() {

	let spy;

	beforeEach(function() {
		
		spy = sinon.spy(console, 'log');
	});

	afterEach(function() {
		
		spy.restore();
	});

	it("calculate sum 100 and 20", function() {

		sendPaymentRequestToAPI(100, 20);
		expect(spy.calledOnce("The total is: 120")).to.be.true;
	});

	it("calculate sum 10 and 10", function() {

		sendPaymentRequestToAPI(10, 10);
		expect(spy.calledOnce("The total is: 20")).to.be.true;
	});
});
