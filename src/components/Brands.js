import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios"

class Brands extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trigger: false,
            brands: undefined
        };
    }

    triggerNext() {
        this.setState({ trigger: true} ,() => this.props.triggerNextStep())
    }

    renderBrands() {
        return this.state.brands.map(brand => {
           return(
                <div key={brand.specs} className='category'>
                    <img className='category-img' src={brand.img}></img>
                    <p>{brand.display}</p>
                </div>
            )
        })
    }

    componentWillMount() {
        const { steps } = this.props;
        const { selectCategory } = steps;
        axios.get('http://localhost:8085/chatbot', {params: { value: selectCategory.value, func: 'brandsAvailable' }})
             .then(brand => {
                this.setState({brands: brand.data})
            })
    }

    componentDidMount(){
        this.triggerNext()
    }

    render() {
        if(this.state.brands !== undefined) {
            return (
                <div className="product-details">
                    <h3>Type a brand to see available products</h3>
                    {this.renderBrands()}
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

Brands.propTypes = {
    triggerNextStep: PropTypes.func,
};

Brands.defaultProps = {
    triggerNextStep: undefined,

};

export default Brands;









