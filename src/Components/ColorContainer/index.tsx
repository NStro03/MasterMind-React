import React, { useState } from "react";
import "./style.css"

function ColorContainer(props: {myColor: string, action: Function, selectedColor: string}) {  
    // const [myColor, setMyColor] = useState(0)

    return (
        <div className="colorCircle" style={props.myColor === "" ? {backgroundColor: "white"} : {backgroundColor: props.myColor}} onClick={() => props.action(props.myColor)}></div>
    )
}

export default ColorContainer;