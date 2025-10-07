import React from 'react';
import Criminal from './Criminal';
import JSON from './Solve.json';
class Case extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'crime series',
            officer: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <Criminal des = {this.state.officer}/>
            </div>
        )
    }
}

export default Case;