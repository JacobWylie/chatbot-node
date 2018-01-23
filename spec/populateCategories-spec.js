const helpers = require('../src/bot/functions');
const productDetails = require('../src/bot/productDetails')

describe("populate categories", () => {
	const popCats = helpers.populateCategories;
	it("should be defined", function() {
    	expect(popCats).toBeDefined();
    });

	const catNames = [...new Set(productDetails.map(product => product.type))];
	it("should return an array of unique products", () => {
  		expect(catNames.length).toBeGreaterThan(1);
  	})

  	catNames.shift();
  	it('should remove the first item which is undefined', () => {
  		expect(catNames[0]).not.toEqual(undefined);
  	})

	function Category(type, img, id) {
		this.type = type;
		this.img = img;
		this.id = id
	}
	let newCat = new Category(catNames[0], productDetails[0][catNames[0]], 0)	
	it('should have an type', () => {
		expect(newCat.type).toEqual(catNames[0])
	})
	it('should have an img url', () => {
		expect(newCat.img).toEqual(productDetails[0][catNames[0]])
	})
	it('should have an id', () => {
		expect(newCat.id).toEqual(0)
	})

	const catArr = []
	for (let i=0; i<1; i++) {
		let newCat = new Category(catNames[i], productDetails[0][catNames[0]], i)
		catArr.push(newCat)
	}
	it('should contain object data', () => {
		expect(catArr[0].type).toEqual(catNames[0])
	})
	it('should contain object data', () => {
		expect(catArr[0].img).toEqual(productDetails[0][catNames[0]])
	})
	it('should contain object data', () => {
		expect(catArr[0].id).toEqual(0)
	})

	let pc = popCats();
	it('should return an array with objects', () => {
		expect(pc).toContain(jasmine.objectContaining(newCat))
	})

});

	






































