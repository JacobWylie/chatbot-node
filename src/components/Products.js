import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios"

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trigger: false,
            products: undefined
        };
    }

    triggerNext() {
        this.setState({ trigger: true} ,() => this.props.triggerNextStep())
    }

    renderProducts() {
        return this.state.products.map(product => {
           return(
                <div key={product.specs} className='category'>
                    <img className='category-img' src={product.img}></img>
                    <p>{product.name}</p>
                </div>
            )
        })
    }

    componentWillMount() {
        const { steps } = this.props;
        const { productTypes } = steps;
        axios.get('http://localhost:8085/chatbot', {params: { value: productTypes.value, func: 'productChoice' }})
             .then(product => {
                this.setState({products: product.data})
            })
    }

    componentDidMount(){
        this.triggerNext()
    }

    render() {
        if(this.state.products !== undefined) {
            return (
                <div className="product-details">
                    <h3>Type a product to see it's details</h3>
                    {this.renderProducts()}
                </div>
            );
        } 
        return(
            <div className="product-details">
                <p>...</p>
            </div>
        )

    }
}

Products.propTypes = {
    triggerNextStep: PropTypes.func,
};

Products.defaultProps = {
    triggerNextStep: undefined,

};

export default Products;









