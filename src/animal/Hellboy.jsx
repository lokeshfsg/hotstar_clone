import React from 'react';
import HellboyData from './HellboyData';
import JSON from './Monster.json';

class Hellboy extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'Products Page',
            hellboy: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <HellboyData des = {this.state.hellboy}/>
            </div>
        )
    }
}

export default Hellboy;