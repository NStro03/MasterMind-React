import React from "react";

// Local Imports
import { FcApproval } from "react-icons/fc";

function CheckSolution(props:{checkSolutionAction: () => void}) {
    return(
        <div onClick={() => props.checkSolutionAction()}><FcApproval /></div>
    )
}

export default CheckSolution;