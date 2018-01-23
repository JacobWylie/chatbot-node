const helpers = require('../src/bot/functions');
const productDetails = require('../src/bot/productDetails');

describe("validateCategories", () => {
	const valCats = helpers.validateCategories;
	it("should be defined", function() {
    	expect(valCats).toBeDefined();
    });

    let value = helpers.lowerCaseNoSpace("P h  onES&t a BLE t s");
    it('should return a string with no spaces or uppercase', () => {
    	expect(value).toEqual('phones&tablets');
    });

    let cat = helpers.lowerCaseNoSpace(productDetails[1].type)
    it('should equal "phones&tablets"', () => {
    	expect(cat).toEqual("phones&tablets");
    })

    let truthy
	for (let i=1;i<productDetails.length;i++) {	
		if(value === cat){
			truthy = true;
			return truthy;
		}
	}
	it('should be true', () => {
		expect(truthy).toBeTruthy()
	})

})