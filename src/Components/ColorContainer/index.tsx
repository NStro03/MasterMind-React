import React, { useState } from "react";
import "./style.css"

function ColorContainer(props: {myColor: string, action: Function}) {  
    // const [myColor, setMyColor] = useState(0)

    return (
        <div className="colorCircle" style={{backgroundColor: props.myColor}} onClick={() => props.action(props.myColor)}></div>
    )
}

export default ColorContainer;