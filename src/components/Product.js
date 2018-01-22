import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inProductList: '',
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { inProductList } = steps;
        this.setState({ inProductList });
    }

    render() {
        const { inProductList } = this.state;
        let product = inProductList.value;
        return (
            <div className="product-details">
                <h3>Product Details</h3>
                <table>
                        <ProductInfo product = {product} />
                </table>
            </div>
        );
    }
}

Product.propTypes = {
    steps: PropTypes.object,
};

Product.defaultProps = {
    steps: undefined,
};

export default Product;




















