import React from 'react';
import Vibheeshan from './Vibheeshan';
import JSON from './Mani.json';
class Teja extends React.Component{

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
                <Vibheeshan des = {this.state.secondmovie}/>
            </div>
        )
    }
}

export default Teja;