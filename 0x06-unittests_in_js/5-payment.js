//5-payment.js

const Utils = require("./utils");

module.export = function sendPaymentRequestToApi(totalAmount, totalShipping) {

	const total = Utils.calculateNumber("SUM", totalAmount, totalShipping);
	console.log(`The total is: ${total}`);
};
