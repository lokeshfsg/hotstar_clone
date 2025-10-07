import React from 'react';
import Julie from './Julie';
import JSON from './Bheema.json';

class Jack extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'best suspense series',
            jack: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <Julie stone = {this.state.jack}/>
            </div>
        )
    }
}

export default Jack;