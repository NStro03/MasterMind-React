import React, { useState } from "react";
import { DEFAULT_PEG_COLOR } from "../Utils/constants";
import "./style.css"

function ColorContainer(props: {myColor: string, myPosition: number, action: Function | null}) {  
    // const [myColor, setMyColor] = useState(0)

    return (
        <div className="colorCircle" style={props.myColor === "" ? {backgroundColor: DEFAULT_PEG_COLOR} : {backgroundColor: props.myColor}} onClick={() => props.action?.(props.myPosition)}></div>
    )
}

export default ColorContainer;