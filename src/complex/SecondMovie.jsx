import React from 'react';
import SecondData from './SecondData';
import JSON from './Shoot.json';
class SecondMovie extends React.Component{

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
                <SecondData des = {this.state.secondmovie}/>
            </div>
        )
    }
}

export default SecondMovie;