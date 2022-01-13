import { FcApproval } from "react-icons/fc";

function CheckSolution(props:{checkSolutionAction: Function}) {
    return(
        <div onClick={() => props.checkSolutionAction()}><FcApproval /></div>
    )
}

export default CheckSolution;