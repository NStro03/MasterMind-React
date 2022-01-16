import { useState } from "react";

// Local Imports
import "./style.css"

function Rules() {

    const [isHidden, setIsHidden] = useState(true)

    return (
        <div className="rulesContainer">
            <h3 onClick={() => { setIsHidden(preValue => !preValue) }}>{isHidden ? 'Show' : 'Hide'} Rules</h3>
            {
                !isHidden && <h4>Try to guess the pattern, in both order and color, within ten turns. After submitting a row, a small black peg is placed for each code peg from the guess which is correct in both color and position. A white peg indicates the existence of a correct color code peg placed in the wrong position. A Red peg indicates existence of incorrect color.</h4>
            }
        </div>

    )
}

export default Rules;