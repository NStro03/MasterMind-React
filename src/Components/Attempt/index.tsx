import React, { useState } from "react";
import ColorContainer from "../ColorContainer";
import "./style.css"

function Attempt (props: {isActive: boolean, selectedColor: string, action: Function, attemptState: []}) {
    
    const [attemptState, setAttemptState] = useState({isActive: true, action: undefined})

    const colorComponents = Array.from({ length: 4 },
        (_, i) => <ColorContainer myColor={-props.attemptState[i]-} selectedColor={props.selectedColor} action={props.action} />
    )

    return(
        <div className="attemptContainer">
            {colorComponents}
        </div>
    )
}

export default Attempt;