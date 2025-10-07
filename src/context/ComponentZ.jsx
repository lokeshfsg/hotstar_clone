// ComponentZ nested under <ComponentY/>

import React ,{useContext } from "react";
import {OrganizationContext,CourseContext} from '../App'//importing context variables defined in <App/> Component using system defined createContext() function

function CompoenentZ(){
    ////assign the context values set in the root "<App/>" compoenent to local custom variables
//<CompoenentZ/> is the consumer of context data

const organization =useContext(OrganizationContext);

const course = useContext(CourseContext);

return (
    <div>
        <h2>ComponentX -- ComponentY (Child of X) -- ComponentZ (Child of Y)</h2>
        <h1>In ComponentZ</h1>
        
         <h3>
            {organization}
            <p>{course}</p>
        </h3>
    </div>
)
}
export default CompoenentZ;