//Standline ComponentA derectly nested under root <App/>
import React ,{useContext} from 'react';
import {OrganizationContext,CourseContext} from '../App'//importing context variables defined in <App/> Component using system defined createContext() function

function ComponentA(){//functional component
//assign the context values set in the root "<App/>" compoenent to local custom variables
//<CompoenentA/> is the consumer of context data

const organization =useContext(OrganizationContext);

const [course,setContext] =useContext(CourseContext);
//const course = useContext(CourseContext);

return (
    <div>
        <h1>Standlone Component A</h1>
        <h3>
            {organization}
        </h3>
        <p>
            {course} {/* Render the context variables data in the view */}
        </p>
        <button  onClick={()=>setContext("New value")}>
            Change Context  value
        </button>
    </div>
)
}
export default ComponentA;