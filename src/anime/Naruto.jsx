import React from 'react';
import Sasuke from './Sasuke';
import JSON from './Jiraya.json';
class Naruto extends React.Component{
    constructor() {
        super();
        this.state = {
            naruto: JSON
        }
    }
    render() {
        return(
            <div>
                <Sasuke des= {this.state.naruto}/>
            </div>
        )
    }
}
export default Naruto;