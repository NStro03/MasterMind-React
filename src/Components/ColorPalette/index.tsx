import React from "react";
import ColorContainer from "../ColorContainer";
import "./style.css"

function ColorPalette(props: { colorMap: string[], selectedColor:string, action: Function }) {

    console.log("Colors imported:\n" + props.colorMap);

    const colorComponents = props.colorMap.map((color: string, position: number) =>
        <ColorContainer key={position} myColor={color} myPosition={position} action={props.action} isSelectedInPalette={props.selectedColor === color} />
    )

    return (
        <div className="ColorPaletteContainer">
            {/* <ColorContainer myColor={props.colorMap[1]} onClick={() => props.onClickAction(props)}/>
            <ColorContainer myColor={props.colorMap[2]} onClick={props.onClickAction}/> */}
            {colorComponents}
        </div>
    );
}

export default ColorPalette;