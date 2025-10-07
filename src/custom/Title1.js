import React,{use, useState} from 'react';
import useTitle from './CustomHook';
const Title1=()=>{
    const[record,setRecord] = useState(0);
     useTitle(record);
     return(
        <div>
            <button onClick={()=> setRecord(record+1)}>
                Record:{record}
            </button>

            
        </div>
     )
}
export default Title1;