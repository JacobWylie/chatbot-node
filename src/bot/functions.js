// import productDetails from './productDetails';
const productDetails = require('./productDetails');

const helperFunctions = {

						// populates the initial list of categories from the data set
	populateCategories: () => {
							const catArr = []
							const catNames = [...new Set(productDetails.map(product => product.type))];
							catNames.shift()
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
							let arr = Object.keys(productDetails);
							let truthy
							for(let i=0;i<arr.length;i++) {
								let cat = helperFunctions.lowerCaseNoSpace(arr[i])
								if(value === cat){truthy = true}
							} 
							return (truthy ? true : "Let's choose a valid category!")
	},

					 // displays list of available brands from selected category
	'brandsAvailable': value => {
						value = helperFunctions.lowerCaseNoSpace(value);
						let list = [];
						let string = ""
						let brands;
						let arr = Object.keys(productDetails);
						for (let i=0; i<arr.length;i++) {
							if (helperFunctions.lowerCaseNoSpace(arr[i]).includes(value)) {
								brands = arr[i];
							}
						}
						// finds array of products that user selected
						// fills new array of unique brands for that type of product
						// to display to user to choose from

						productDetails[brands].forEach(product => {
							if(!list.includes(product.display)) {
								list.push(product.display);
							}
						})
						// compiles string from array to display as message on page
						if (list.length === 0) {
							string = `Sorry we don't have any products available in that category right now. Please type "back"`;
						} else if (list.length > 0){
							string = `We currently have these ${value} in stock: `;
							for(let i=0;i<list.length;i++) {
								string += ` "${list[i]}" | `;
							}
							string += "  Please type which one you'd like to explore";
						} else {
							string = 'There was an error. Please type "back"';
						}
						return string;	
					},

				  // checks to see if user is trying to view a valid product type. all other inputs return an error	
	'productTypes': function productTypes(value) {
						value = helperFunctions.lowerCaseNoSpace(value);
					    let productArr = Object.keys(productDetails);
					    let truthy
					    for (let i=0;i<productArr.length;i++) {
							for (let x=0;x< productDetails[productArr[i]].length;x++) {
								let tag = productDetails[productArr[i]][x].display;
								tag = helperFunctions.lowerCaseNoSpace(tag);
								if(tag === value) {truthy = true};
							}
						}
						return (truthy || value === 'back' ? true : "Sorry that is not a valid input")
					},

				   // Returns a list of products based on the type selected. User can select from list to see details	
	productChoice: function productChoice(previousValue) {
						let productArr = Object.keys(productDetails);
						let list = [];
						let string = "";
						let value = this.lowerCaseNoSpace(previousValue);
						productArr.forEach(category => {
							productDetails[category].forEach(product => {
								let name = product.display;
								name = this.lowerCaseNoSpace(name);
								if(value === name) {
									list.push(product.name);
								}
							})
							return list;
						})

						if (list.length === 0) {
							string = `Sorry we don't have any products available from ${previousValue} right now. Please type "back"`;
						} else if (list.length > 0){
							string = "We can show you product details for the following:";
							for(let i=0;i<list.length;i++) {
								string += ` "${list[i]}" |`;
							}
							return string;
						} else {
							string = "There was an error";
						}
						return string;	
					},

					// Checks to see if user is trying to see valid project. all other inputs return error
	'inProductList': function inProductList(value) {
						let foundProduct = helperFunctions.findProduct(value);
						return (foundProduct || value ==='back' ? true: "Sorry that is not a valid input");
					},

					// Checks if the product the user selected exists. Disables user from selecting
					// anything that is not a product
	findProduct: function findProduct(value) {
					value = this.lowerCaseNoSpace(value);
					let productArr = Object.keys(productDetails);
					for (let i=0;i<productArr.length;i++) {
						for (let x=0;x< productDetails[productArr[i]].length;x++) {
							let tag = productDetails[productArr[i]][x].name;
							tag = this.lowerCaseNoSpace(tag);
							if (tag === value) {
								return productDetails[productArr[i]][x];
							}
						}
					}
				},

	lowerCaseNoSpace: value => value.toLowerCase().replace(/ +/g, "")

	// value => value.toLowerCase().replace(/ +/g, "")
}

module.exports = helperFunctions
// export default helperFunctions;






































