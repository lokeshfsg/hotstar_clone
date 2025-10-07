import React, { useState } from "react";

const State = () => {
    let initialCount = 0;
    const[name, setName] = useState('mern')
    const[count, setCount] = useState(initialCount)
    return(
        <div>
       <h1>
        {name}
       </h1>
       <button onclick= {() =>{setName('java')}}>change-domain</button>
       <br />
       <hr />
       <br />
      <h2>counter: {count}</h2>
      <button onclick= {() => {setCount(count+1)}}>     +1   </button><br />
      <br />
      <button onclick= {() => {setCount(count-1)}}>     -1   </button><br /><br />
      <button onclick= {() => {setCount(initialCount)}}>reset</button>
        </div>
    )
}
export default State;