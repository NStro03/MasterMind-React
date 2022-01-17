import React from "react";

// Local Imports
import { DEFAULT_PEG_COLOR } from "../Utils/constants";
import "./style.css"

type ColorContainerProp = {
    myColor: string,
    myPosition: number,
    action?: Function,
    isSelectedInPalette: boolean
}

function ColorContainer(props: ColorContainerProp) {

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