import React from 'react';
import ProductList from './ProductList';
import JSON from './Loki.json';

class Products extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'Products Page',
            products: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <ProductList prodlist = {this.state.products}/>
            </div>
        )
    }
}

export default Products