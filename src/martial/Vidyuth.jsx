import React from 'react';
import Commando from './Commando';
import JSON from './Adhaa';

class Vidyuth extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'best action movies',
            vidyuth: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <Commando agress = {this.state.vidyuth}/>
            </div>
        )
    }
}

export default Vidyuth;