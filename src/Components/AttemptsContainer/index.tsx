import React from "react";
import Attempt from "../Attempt";
import "./style.css";


function AttemptsContainer(props: { boardColors: Array<Array<string>>, boardHints: Array<Array<string>>, attemptsMade: number, action: Function, selectedColor: string, checkSolutionAction: Function }) {
// Use Map for each element in boardColors
    const attemptComponents = props.boardColors.map((iterAttempt: Array<string>, index: number) => 
        <Attempt isActive={props.attemptsMade === index ? true : false} action={props.action} attemptColors={iterAttempt} attemptHints={Array<string>(...props.boardHints[index])} checkSolutionAction={props.checkSolutionAction} key={index} />
    )
    // const attemptComponents = Array.from({ length: props.totalAttempts },
    //     (_, i) => <Attempt isActive={true} selectedColor={props.selectedColor} attemptState={props.boardColors[i]} action={props.action} />
    // )

    return (
        <div className="attemptsContainer">
            {attemptComponents}
        </div>
    )
}

export default AttemptsContainer;