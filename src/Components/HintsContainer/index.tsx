import React from "react";

// Local Imports
import Hint from "../Hint";

function HintsContainer(props:{attemptHints: Array<string>}) {
    const hintComponents = props.attemptHints.map((hintType: string, index: number) => 
    <Hint hintType={hintType} key={index}/>
    )

    return(
        <div className="hintsContainer">
            {hintComponents}
        </div>
    )
}

export default HintsContainer;