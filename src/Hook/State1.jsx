import React, { useState } from "react";

const State1 = () => {
    const [isOn, setIsOn] = useState(false)
    return (
        <div className="anybtn">
            {!isOn && <button onClick={() => { setIsOn(true) }}>
                login
            </button>}
            {isOn && <button onClick={() => { setIsOn(false) }}>
                logout
            </button>
            }
        </div>
    )
}
export default State1;