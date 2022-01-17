import React from "react";

// Local Imports
import Attempt from "../Attempt";
import "./style.css";

type AttemptsContainerProp = { 
    boardColors: Array<Array<string>>, 
    boardHints: Array<Array<string>>, 
    attemptsMade: number, 
    action: (pegPosition: number) => void, 
    selectedColor: string, 
    checkSolutionAction: () => void 
}

function AttemptsContainer(props: AttemptsContainerProp) {
    const attemptComponents = props.boardColors.map((iterAttempt: Array<string>, index: number) => 
        <Attempt isActive={props.attemptsMade === index ? true : false} 
        action={props.action} 
        attemptColors={iterAttempt} 
        attemptHints={Array<string>(...props.boardHints[index])} 
        checkSolutionAction={props.checkSolutionAction} 
        key={index} />
    )

    return (
        <div className="attemptsContainer">
            {attemptComponents}
        </div>
    )
}

export default AttemptsContainer;