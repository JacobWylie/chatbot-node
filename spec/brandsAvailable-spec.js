const helpers = require('../src/bot/functions');
const productDetails = require('../src/bot/productDetails');

describe("brandsAvaiable", () => {
	const brAva = helpers.brandsAvailable;
	it("should be defined", function() {
    	expect(brAva).toBeDefined();
    });

    let value = helpers.lowerCaseNoSpace("P h  onES&t a BLE t s");
    it('should return a string with no spaces or uppercase', () => {
    	expect(value).toEqual('phones&tablets');
    });

    let cat = helpers.lowerCaseNoSpace(productDetails[1].type)
    it('should equal "phones&tablets"', () => {
    	expect(cat).toEqual("phones&tablets");
    })

    let brands = []
		for (let i=1;i<productDetails.length;i++) {
			if(cat === value) {
				brands.push(productDetails[1])
			}
		}
	it('should contain the first product object', () => {
		expect(brands).toContain(jasmine.objectContaining(productDetails[1]))
	})

	brands.push(productDetails[1])
	brands = helpers.removeDuplicates(brands, 'display')
	it('should remove duplicate objects', () => {
		expect(brands.length).toEqual(1);
	})

	let ba = brAva('phones&tablets');
	it('should return an array with objects', () => {
		expect(ba).toContain(jasmine.objectContaining(productDetails[1]))
	})

})