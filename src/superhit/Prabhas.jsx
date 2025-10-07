import React from 'react';
import Rana from './Rana';
import JSON from './Devsena.json';

class Prabhas extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'Products Page',
            prabhas: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <Rana des = {this.state.prabhas}/>
            </div>
        )
    }
}

export default Prabhas;