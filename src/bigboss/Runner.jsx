import React from 'react';
import Winner from'./Winner';
import JSON from './salman.json';
class Runner extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'Products Page',
            tenth: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <Winner des = {this.state.tenth}/>
            </div>
        )
    }
}

export default Runner;