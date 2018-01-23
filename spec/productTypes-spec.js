const helpers = require('../src/bot/functions');
const productDetails = require('../src/bot/productDetails');

describe("productTypes", () => {
	const proTyp = helpers.productTypes;
	it("should be defined", function() {
    	expect(proTyp).toBeDefined();
    });

    let value = helpers.lowerCaseNoSpace("Ap pl e IPHO  ne");
    it('should return a string with no spaces or uppercase', () => {
    	expect(value).toEqual('appleiphone');
    });

    let cat = helpers.lowerCaseNoSpace(productDetails[1].display)
    it('should equal "appleiphone"', () => {
    	expect(cat).toEqual("appleiphone");
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

	let truther = (truthy || value === 'back' ? true : "Sorry that is not a valid input")
	it('should be true', () => {
		expect(truth).toBeTruthy()
	})

	truthy = false
	let falser = (truthy || value === 'back' ? true : "Sorry that is not a valid input")
	it('should be false', () => {
		expect(falser).toBeFalsy()
	})
})