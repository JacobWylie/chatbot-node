import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios"

class Brands extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trigger: false,
            selectCategory: '',
            brands: undefined
        };
    }

    triggerNext() {
        this.setState({ trigger: true} ,() => this.props.triggerNextStep())
    }

    renderBrands() {
        return this.state.options.map(option => {
           return(
                <p key ={option.label}>{option.value}</p>
            )
        })
    }

    componentWillMount() {
        const { steps } = this.props;
        const { selectCategory } = steps;
        this.setState({ selectCategory });
        console.log(this.state)
        axios.get('http://localhost:8085/chatbot', {params: { value: this.state.selectCategory, func: 'brandsAvailable' }})
             .then(brand => {
                this.setState({brands: brand.data})
            })
    }

    componentDidMount(){
        this.triggerNext()
    }

    render() {
        const { selectCategory} = this.state;
        if(this.state.brands !== undefined) {
            return (
                <div className="product-details">
                    <h3>Available Brands</h3>
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









