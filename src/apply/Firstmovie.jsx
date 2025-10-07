import React from 'react';
import FirstData from './FirstData';
import JSON from './Fight.json'


class Firstmovie extends React.Component{

    constructor(){
        super();
        this.state = {
            Heading: 'Products Page',
            firstmovie: JSON
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.Heading}</h1>
                <FirstData matter = {this.state.firstmovie}/>
            </div>
        )
    }
}

export default Firstmovie;