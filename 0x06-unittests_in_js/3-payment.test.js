// 3-payment.test.js


const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");


describe("sendPaymentRequestToApi", function() {
	
	it("validate the Utils funtion", function() {
		const spy = sinon.spy(Utils, 'calculateNumber');

		sendPaymentRequestToApi(100, 20);

		expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
		spy.restore();
	});
});
