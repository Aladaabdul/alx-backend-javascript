// 0-calcul.test.js

const calculateNumber = require("./1-calcul");
const assert = require("assert");


describe("mathOps", function() {
	it("sum of 1.4 and 4.5 should return 6", function() {
		assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6)
	});

	it("subtract of 1.4 and 4.5 should return -4", function() {
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
	});
	
	it("division of 1.4 and 4.5 should return 0.2", function() {
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
	});

	it("division of 1.4 and 0 should return Error", function() {
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
	});
});
