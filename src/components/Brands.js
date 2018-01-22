import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios"

class Brands extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trigger: false,
            brands: ''
        };
    }

    triggerNext() {
        this.setState({ trigger: true} ,() => this.props.triggerNextStep())
    }

    renderOptions() {
        return this.state.options.map(option => {
           return(
                <p key ={option.label}>{option.value}</p>
            )
        })
    }

    componentWillMount() {
        axios.get('http://localhost:8085/chatbot', {params: { value: null, func: "populateCategories" }})
             .then(options => {
                this.setState({options: options.data})
            })
    }

    componentWillMount() {
        const { steps } = this.props;
        const { brands } = steps;
        this.setState({ brands });
    }

    render() {
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









