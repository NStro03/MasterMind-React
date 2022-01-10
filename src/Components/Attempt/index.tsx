import React, { useState } from "react";
import ColorContainer from "../ColorContainer";
import "./style.css"

function Attempt (props: {isActive: boolean, action: Function, attemptColors: Array<string>}) {
    
    const colorComponents = props.attemptColors.map((iterColor: string, position: number) =>
        <ColorContainer myColor={iterColor} myPosition={position} action={props.isActive ? props.action : null } key={position} isSelectedInPalette={false}/>
    )
    
    // Array.from({ length: 4 },
    //     (_, i) => <ColorContainer myColor={-props.attemptState[i]} selectedColor={props.selectedColor} action={props.action} />
    // )

    return(
        <div className="attemptContainer">
            {colorComponents}
        </div>
    )
}

export default Attempt;