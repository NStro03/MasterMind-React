import React from "react";
import Attempt from "../Attempt";
import "./style.css";


function AttemptsContainer(props: { boardColors: Array<object>, attemptsMade: number, action: Function, selectedColor: string }) {
// Use Map for each element in boardColors
    const attemptComponents = props.boardColors.map((iterAttempt: object) => 
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