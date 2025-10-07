import React from 'react';
import Karn from './Karn';
import JSON from './Krushn.json';
class Arjun extends React.Component{

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
                <Karn des = {this.state.secondmovie}/>
            </div>
        )
    }
}

export default Arjun;