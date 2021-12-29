import React from "react";
import ColorContainer from "../ColorContainer";
import "./style.css"

function ColorPalette(props: { colorMap: string[], action: Function }) {

    console.log("Colors imported:\n" + props.colorMap);

    const colorComponents = props.colorMap.slice(1, props.colorMap.length).map((color: string) =>
        <ColorContainer key={color.slice(1, color.length)} myColor={color} action={props.action} />
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