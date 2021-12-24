import React, { useState } from "react";
import "./style.css"

function Rules() {

    const [state, setstate] = useState({ isHidden: true })

    let ruleElement;

    if (state.isHidden) {
        ruleElement = <div>
            <h3 onClick={() => { setstate({ isHidden: false }) }}>Show Rules:</h3>
        </div>
    }
    else {
        ruleElement = <div>
            <h3 onClick={() => { setstate({ isHidden: true }) }}>Hide Rules:</h3>
            <h4>Try to guess the pattern, in both order and color, within ten turns. After submitting a row, a small black peg is placed for each code peg from the guess which is correct in both color and position. A white peg indicates the existence of a correct color code peg placed in the wrong position. More info on Wikipedia.</h4>
        </div>
    }

    return (
        <div className="rulesContainer">{ ruleElement }</div>
        
    )

}

export default Rules;