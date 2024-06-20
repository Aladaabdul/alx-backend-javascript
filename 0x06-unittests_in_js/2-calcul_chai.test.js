// 2-calcul_chai.test.js

import { calculateNumber } from "./2-calcul_chai.js";
import { expect } from "chai"


describe("mathOps", function() {
	it("sum of 1.4 and 4.5 should return 6", function() {
		expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
	});

	it("subtract of 1.4 and 4.5 should return -4", function() {
		expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
	});
	
	it("division of 1.4 and 4.5 should return 0.2", function() {
		expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
	});

	it("division of 1.4 and 0 should return Error", function() {
		expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')
	});
});
