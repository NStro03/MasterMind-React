import React, { useState } from "react";
import { DEFAULT_PEG_COLOR } from "../Utils/constants";
import "./style.css"

type ColorContainerProp = {
    myColor: string,
    myPosition: number,
    action: Function | null,
    isSelectedInPalette: boolean
}
function ColorContainer(props: ColorContainerProp) {
    // const [myColor, setMyColor] = useState(0)
    let circleClassName = "colorCircle";
    // if(props.isSelectedInPalette){
    //     circleClassName += " active"
    // }

    // 

    return (
        <div className="colorCircle" style={
            {
                backgroundColor: props.myColor === "" ? DEFAULT_PEG_COLOR : props.myColor,
                borderWidth: props.isSelectedInPalette ? "2px" : "1px"
            }
        } onClick={() => props.action?.(props.myPosition)}></div>
    )
}

export default ColorContainer;