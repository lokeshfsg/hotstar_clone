import React from 'react';
import JSON from './Destiny.json';
import Pooja from './Pooja';
class Aditya extends React.Component{

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
                <Pooja des = {this.state.secondmovie}/>
            </div>
        )
    }
}

export default Aditya;