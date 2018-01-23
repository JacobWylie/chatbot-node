const helpers = require('../src/bot/functions');
const productDetails = require('../src/bot/productDetails');

describe("productChoice", () => {
	const proCho= helpers.productChoice;
	it("should be defined", function() {
    	expect(proCho).toBeDefined();
    });

    let value = helpers.lowerCaseNoSpace("A pp l eIPHO n  e");
    it('should return a string with no spaces or uppercase', () => {
    	expect(value).toEqual('appleiphone');
    });

    let name = helpers.lowerCaseNoSpace(productDetails[1].display);
    it('should equal "appleiphone"', () => {
    	expect(name).toEqual("appleiphone");
    })

    let products = [];
	for(let i=1; i<productDetails.length; i++) {
		if(value === name) {
			products.push(productDetails[1]);
		}
	}

	let pc = proCho('appleiphone');
	it('should return an array with objects', () => {
		expect(pc).toContain(jasmine.objectContaining(productDetails[1]))
	})

})