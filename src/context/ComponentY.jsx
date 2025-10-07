//Comonent nested under root <App/>

import React from "react";
import ComponentZ from './ComponentZ';

function ComponentY(){ //Functional Component
    return(
        <div>
            <ComponentZ/> {/* ComponentZ nested under ComponentY*/}
        </div>
    )
}
export default ComponentY;