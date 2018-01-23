const helpers = require('../src/bot/functions');
const productDetails = require('../src/bot/productDetails');

describe("removeDuplicates", () => {
	const reDupes = helpers.removeDuplicates;
	it("should be defined", function() {
    	expect(reDupes).toBeDefined();
    });

	let testArr = [productDetails[1], productDetails[2], productDetails[3]]
    function noDupes(myArr, prop) {
    	return myArr.filter((obj, pos, arr) => {
    		return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
    	})
    }
    it('should return an array of 1 object after removing objects with duplicate values', () => {
    	expect(noDupes(testArr, 'display'))
    })

})