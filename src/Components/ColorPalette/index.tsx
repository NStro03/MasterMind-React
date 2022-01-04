import React from "react";
import ColorContainer from "../ColorContainer";
import "./style.css"

function ColorPalette(props: { colorMap: string[], action: Function }) {

    console.log("Colors imported:\n" + props.colorMap);

    const colorComponents = props.colorMap.map((color: string) =>
        <ColorContainer key={props.colorMap.lastIndexOf(color).toString()} myColor={color} action={props.action} selectedColor={""} />
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