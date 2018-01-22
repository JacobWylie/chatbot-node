import React from 'react';
import Product from '../components/Product';
import Categories from '../components/Categories';
import Brands from '../components/Brands';
import helperFunctions from './functions';

const steps = [
    {
        id: '1',
        message: 'Welcome to the ChatBot! We have a wide variety of products available to rent.',
        trigger: '2',
    },
    {
        id: '2',
        message: "First choose a category to see what's brands are available. You can type 'back' at anytime to start over.",
        trigger: '3',
    },
    {
        id: '3',
        message: 'Type "start" and click enter!',
        trigger: '4',
    },
    {
        id: '4',
        user: true,
        validator: value => value.toLowerCase() === 'start' ? true : 'Type "start" and click enter!',
        trigger: 'categories'
    },
    {
        id: "categories",
        component: <Categories />,
        waitAction: true,
        trigger: 'selectCategory'
    },
    {
        id:'selectCategory',
        user: true,
        validator: value => helperFunctions.validateCategories(value),
        trigger: ({value}) => value.toLowerCase() === 'back' ? 'back' : 'brands',
    },
    {
        id: 'brands',
        component: <Brands />,
        waitAction: true,
        trigger: 'productTypes'
    },
    {
        id: 'productTypes',
        user: true,
        validator: value => helperFunctions.productTypes(value),
        trigger: ({value}) => value.toLowerCase() === 'back' ? 'back' : 'productDetails'
    },
    {
        id: 'productDetails',
        message: ({previousValue}) => helperFunctions.productChoice(previousValue),
        trigger: 'inProductList'
    },
    {
        id: 'inProductList',
        user: true,
        validator: value => helperFunctions.inProductList(value),
        trigger: ({value}) => value.toLowerCase() === 'back' ? 'back' : 'summary2'
    },
    {
        id: 'summary2',
        component: <Product />,
        asMessage: true,
        trigger: 'end'
    },
    {
        id: 'end',
        options: [
            { value: 'Start Over', label: 'Start Over', trigger: 'categories' }
        ]
    },
    {
        id: 'back',
        message: 'Going Back......',
        trigger: 'categories'
    },
]

export default steps;



















































