//Comonent nested under root <App/>

import React from "react";
import ComponentY from './ComponentY';

function ComponentX(){ //Functional Component
    return(
        <div>
            <ComponentY/> {/* Componenty nested under ComponentX*/}
        </div>
    )
}
export default ComponentX;