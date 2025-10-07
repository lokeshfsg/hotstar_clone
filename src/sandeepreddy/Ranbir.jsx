import React from 'react';
import Rashmika from './Rashmika';
import JSON from './Zoya.json';
class Ranbir extends React.Component{

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
                <Rashmika des = {this.state.secondmovie}/>
            </div>
        )
    }
}

export default Ranbir;