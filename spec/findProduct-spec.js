const helpers = require('../src/bot/functions');
const productDetails = require('../src/bot/productDetails');

describe("findProduct", () => {
	const findPro = helpers.findProduct;
	it("should be defined", function() {
    	expect(findPro).toBeDefined();
    });

	let value = helpers.lowerCaseNoSpace("iP h o  ne 7 1 28G B");
	value = helpers.lowerCaseNoSpace(value);
    it('should return a string with no spaces or uppercase', () => {
    	expect(value).toEqual('iphone7128gb');
    });

    let product
	for (let i=1;i<productDetails.length;i++) {
		let tag = helpers.lowerCaseNoSpace(productDetails[i].name);
		if (tag === value) {
			product =  productDetails[i];
		}
	}
	it('should return the first product', () => {
		expect(product).toEqual(productDetails[1])
	})

	let truther = findPro("iP h o  ne 7 1 28G B")
	it('should return the first product', () => {
		expect(truther).toEqual(productDetails[1])
	})

	let falser = findPro("fake product")
	it('should return false', () => {
		expect(falser).toBeFalsy();
	})

})