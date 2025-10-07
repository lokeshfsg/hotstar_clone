import React from 'react';
import Dayabhabi from './Dayabhabi';
import JSON from './Comedy.json';
class Jetahlal extends React.Component{

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
                <Dayabhabi des = {this.state.secondmovie}/>
            </div>
        )
    }
}

export default Jetahlal;