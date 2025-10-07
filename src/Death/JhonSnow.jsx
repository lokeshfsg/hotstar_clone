import React from 'react';
import MotherofDragon from './MotherofDragon';
import JSON from './Arya.json';

class JhonSnow extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'Products Page',
            walker: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <MotherofDragon white = {this.state.walker}/>
            </div>
        )
    }
}

export default JhonSnow;