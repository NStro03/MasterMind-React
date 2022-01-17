import React from "react";

// Local Imports
import CheckSolution from "../CheckSolution";
import ColorContainer from "../ColorContainer";
import HintsContainer from "../HintsContainer";
import { DEFAULT_PEG_COLOR } from "../Utils/constants";
import "./style.css"

type AttemptProp = { 
    isActive: boolean, 
    action: (pegPosition: number) => void, 
    attemptColors: Array<string>, 
    attemptHints: Array<string>, 
    checkSolutionAction: () => void 
}

function Attempt(props: AttemptProp) {

    const colorComponents = props.attemptColors.map((iterColor: string, position: number) =>
        <ColorContainer myColor={iterColor} myPosition={position} action={props.isActive ? props.action : undefined} key={position} isSelectedInPalette={false} />
    )

    const haveWhite = (color: string) => color === DEFAULT_PEG_COLOR;

    return (
        <div className="attemptContainer" style={
            props.isActive ? {
                borderWidth: "2px",
                borderColor: "lightseagreen"
            } : undefined
        }>
            <div className="attemptColorsContainer">
                {colorComponents}
            </div>
            <div className="checkSolutionContainer">
                {
                    (props.isActive && !props.attemptColors.some(haveWhite)) ? <CheckSolution checkSolutionAction={props.checkSolutionAction} /> : null
                }
            </div>
            <div className="attemptHintContainer">
                <HintsContainer attemptHints={props.attemptHints} />
            </div>
        </div>
    )
}

export default Attempt;