const productDetails = require('./productDetails');

const helperFunctions = {

						// populates the initial list of categories from the data set
	'populateCategories': () => {
							const catArr = []
							const catNames = [...new Set(productDetails.map(product => product.type))];
							catNames.shift();
							function Category(type, img, id) {
								this.type = type;
								this.img = img;
								this.id = id
							}
							for (let i=0; i<catNames.length; i++) {
								let newCat = new Category(catNames[i], productDetails[0][catNames[i]], i)
								catArr.push(newCat)
							}
							return catArr;
						},
	
					// Check to see if user entered a valid category
	validateCategories: value => {
							value = helperFunctions.lowerCaseNoSpace(value);
							let truthy
							for (let i=1;i<productDetails.length;i++) {
								let cat = helperFunctions.lowerCaseNoSpace(productDetails[i].type)
								if(value === cat){
									truthy = true;
									return truthy;
								}
							}
							return (truthy ? true : "Let's choose a valid category!")
					},

					 // displays list of available brands from selected category
	'brandsAvailable': value => {
						value = helperFunctions.lowerCaseNoSpace(value);
						let brands = []
						for (let i=1;i<productDetails.length;i++) {
							let cat = helperFunctions.lowerCaseNoSpace(productDetails[i].type)
							if(cat === value) {
								brands.push(productDetails[i])
							}
						}
						// remove objects from array that share the same brand/display
						brands = helperFunctions.removeDuplicates(brands, 'display')
						console.log(brands)
						return brands;
					},

				  // checks to see if user is trying to view a valid product type. all other inputs return an error	
	productTypes: function(value) {
						value = helperFunctions.lowerCaseNoSpace(value);
					    let truthy;
					    for (let i=1;i<productDetails.length;i++) {
					    	let product = helperFunctions.lowerCaseNoSpace(productDetails[i].display)
					    	if(product === value)
					    		truthy = true;
						}
						return (truthy || value === 'back' ? true : "Sorry that is not a valid input")
					},

				   // Returns a list of products based on the type selected. User can select from list to see details	
	'productChoice': function(previousValue) {
						let list = [];
						let value = helperFunctions.lowerCaseNoSpace(previousValue);
						for(let i=0; i<productDetails.length; i++) {
							let name = helperFunctions.lowerCaseNoSpace(productDetails[i].display);
							if(value === name) {
								list.push(productDetails[i].name);
							}
						}
						// compiles string from array to display as message on page
						let noProduct = `Sorry we don't have any products available from ${previousValue} right now. Please type "back"`;
						let product = "We can show you product details for the following:";
						let string = helperFunctions.concactString(list, noProduct, product);
						return string;
					},

					// Checks to see if user is trying to see valid project. all other inputs return error
	inProductList: function(value) {
						let foundProduct = helperFunctions.findProduct(value);
						return (foundProduct || value ==='back' ? true: "Sorry that is not a valid input");
				   },

					// Call to server to find a product. If none found sends false back to validator
	findProduct: function(value) {
					value = helperFunctions.lowerCaseNoSpace(value);
					for (let i=0;i<productDetails.length;i++) {
						let tag = helperFunctions.lowerCaseNoSpace(productDetails[i].name);
						if (tag === value) {
							return productDetails[i];
						}
					}
					return false
				 },

				 // removes duplicate objects based on key: value comparison
	removeDuplicates: function(myArr, prop) {
						    return myArr.filter((obj, pos, arr) => {
						        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
						    })
					},

	lowerCaseNoSpace: value => value.toLowerCase().replace(/ +/g, "")

}

module.exports = helperFunctions






































