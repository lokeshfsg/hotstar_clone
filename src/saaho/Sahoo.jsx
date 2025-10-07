import React from 'react';
import Shradha from './Shradha';
import JSON from './Cop.json';
class Saaho extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'Products Page',
            secondmovie: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <Shradha des = {this.state.secondmovie}/>
            </div>
        )
    }
}

export default Saaho;