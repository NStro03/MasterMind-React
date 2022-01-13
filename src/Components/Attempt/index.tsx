import React, { useState } from "react";
import CheckSolution from "../CheckSolution";
import ColorContainer from "../ColorContainer";
import HintsContainer from "../HintsContainer";
import { DEFAULT_PEG_COLOR } from "../Utils/constants";
import "./style.css"

function Attempt(props: { isActive: boolean, action: Function, attemptColors: Array<string>, attemptHints: Array<string>, checkSolutionAction: Function }) {

    const colorComponents = props.attemptColors.map((iterColor: string, position: number) =>
        <ColorContainer myColor={iterColor} myPosition={position} action={props.isActive ? props.action : null} key={position} isSelectedInPalette={false} />
    )

    // Array.from({ length: 4 },
    //     (_, i) => <ColorContainer myColor={-props.attemptState[i]} selectedColor={props.selectedColor} action={props.action} />
    // )

    const haveWhite = (color: string) => color === DEFAULT_PEG_COLOR;

    return (
        <div className="attemptContainer">
            <div className="attemptColorsContainer">
                {colorComponents}
            </div>
            <div className="checkSolutionContainer">
                {
                    (props.isActive && !props.attemptColors.some(haveWhite)) ? <CheckSolution checkSolutionAction={props.checkSolutionAction} /> : <></>
                }
            </div>
            <div className="attemptHintContainer">
                <HintsContainer attemptHints={props.attemptHints} />
            </div>
        </div>
    )
}

export default Attempt;