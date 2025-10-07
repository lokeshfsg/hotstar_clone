import React from "react";
import { useState } from "react";

const Numbers = () => {

    let [numbers,setNumbers] = useState([]);

    function addNumbers(event){
        setNumbers(
            [...numbers,{
                id: numbers.length,
                value: Math.floor(Math.random() * 10)

            }]

        )
    }

    return(
        <div>
            <h1> usestate in Array</h1>
            <button onClick={(e) => {addNumbers(e)}}> Add-no</button>

            <ul>
                {
                numbers.map((no) =>{
                    return<li key={no.id}>{no.id}is having a value{no.value}</li>

                })
                
                
                }
            </ul>

        </div>
    )
}
export default Numbers;