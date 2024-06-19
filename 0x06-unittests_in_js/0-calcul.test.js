// 0-calcul.test.js

const calculateNumber = require("./0-calcul");
const assert = require("assert");


describe("sumNumber", function() {
	it("sum of 1 and 3 should return 4", function() {
		assert.strictEqual(calculateNumber(1, 3), 4)
	});

	it("sum of 1 and 3.7 should return 5", function() {
		assert.strictEqual(calculateNumber(1, 3.7), 5)
	});
	
	it("sum of 1.2 and 3.7 should return 5", function() {
		assert.strictEqual(calculateNumber(1.2, 3.7), 5)
	});

	it("sum of 1.5 and 3.7 should return 6", function() {
		assert.strictEqual(calculateNumber(1.5, 3.7), 6)
	});

	it("sum of -0.4 and 0.4", function() {
		assert.strictEqual(calculateNumber(-0.4, 0.4), 0)
	});
});
