import React from 'react';
import Sita from './Sita';
import JSON from './Lakshman.json';
class Ram extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'Products Page',
            twelthmovie: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <Sita des = {this.state.twelthmovie}/>
            </div>
        )
    }
}

export default Ram;