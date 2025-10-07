import React from 'react';
import GudduBhayya from './GudduBhayya';
import JSON from './Sweety.json';

class MunnaBhayya extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'Products Page',
            munnabhayya: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <GudduBhayya des = {this.state.munnabhayya}/>
            </div>
        )
    }
}

export default MunnaBhayya;