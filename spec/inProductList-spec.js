const helpers = require('../src/bot/functions');
const productDetails = require('../src/bot/productDetails');

describe("inProductList", () => {
	const inList = helpers.inProductList;
	it("should be defined", function() {
    	expect(inList).toBeDefined();
    });

    let foundProduct = helpers.findProduct("iPhone 7 128GB")
    it('should be the first product object', () => {
    	expect(foundProduct).toEqual(productDetails[1]);
    })

    let truther = (foundProduct ? true : "Sorry that is not a valid input")
	it('should be true', () => {
		expect(truther).toBeTruthy()
	})

	let falser = (helpers.findProduct("fake product") ? true : "Sorry that is not a valid input")
	it('should be false', () => {
		expect(falser).toEqual("Sorry that is not a valid input")
	})
 
})