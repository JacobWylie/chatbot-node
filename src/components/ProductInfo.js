import React, { Component } from 'react';
import helperFunctions from '../bot/functions';

class ProductInfo extends Component {
	render() {
		// Returns the product selected by the user and strored in state
		let details = helperFunctions.findProduct(this.props.product);

		return(
			<tbody>
			<tr>
			    <td><span className="product">Brand</span>: {details.brand}</td>
			</tr>
			<tr>
			    <td><span className="product">Model</span>: {details.name}</td>
			</tr>
			<tr>
			    <td><span className="product">Specs</span>: {details.specs}</td>
			</tr>
			<tr>
			    <td><span className="product">Price</span>: {details.price}</td>
			</tr>
			<tr className="center">
			    <td><a target="_blank" href={details.link}><img src={details.img} alt='product'></img>Order Now!</a></td>
			</tr>
			</tbody>
		)
	}
};

export default ProductInfo;