// 3-payment.test.js


const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");


describe("sendPaymentRequestToApi", function() {
	
	it("validate the Utils funtion", function() {
		const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
		const spy = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20);

		expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
		expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;

		stub.restore();
		spy.restore();
	});
});
