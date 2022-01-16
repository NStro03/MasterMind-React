// Local Imports
import ColorContainer from "../ColorContainer";
import "./style.css"

type ColorPaletteProp = { 
    colorMap: string[], 
    selectedColor:string, 
    action: (colorIndex: number) => void 
}

function ColorPalette(props: ColorPaletteProp) {

    const colorComponents = props.colorMap.map((color: string, position: number) =>
        <ColorContainer key={position} myColor={color} myPosition={position} action={props.action} isSelectedInPalette={props.selectedColor === color} />
    )

    return (
        <div className="ColorPaletteContainer">
            {colorComponents}
        </div>
    );
}

export default ColorPalette;