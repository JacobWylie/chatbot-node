import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios"

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trigger: false,
            categories: undefined
        };
    }

    triggerNext() {
        this.setState({ trigger: true} ,() => this.props.triggerNextStep())
    }

    renderOptions() {
        return this.state.categories.map(cat => {
           return(
                <div key={cat.id} className='category'>
                <img className='category-img' src={cat.img}></img>
                <p>{cat.type}</p>
                </div>
            )
        })
    }

    componentWillMount() {
        axios.get('http://localhost:8085/chatbot', {params: { value: null, func: "populateCategories" }})
             .then(categories => {
                this.setState({categories: categories.data})
            })
    }

    componentDidMount(){
        this.triggerNext()
    }

    render() {
        if(this.state.categories !== undefined) {
            return (
                <div className="product-details">
                    <h3>You Can Type Which Category You'd like to Explore</h3>
                    {this.renderOptions()}
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

Categories.propTypes = {
    triggerNextStep: PropTypes.func,
};

Categories.defaultProps = {
    triggerNextStep: undefined,

};

export default Categories;