import { DEFAULT_HINT_COLOR } from "../Utils/constants";
import "./style.css"

function Hint(props:{hintType:string}) {
    // var hintClassName = DEFAULT_HINT_COLOR;
    //     if( props.hintType !== ""){
    //         hintClassName = ;
    //     }

    return(
        
        <div className={"smallCircle " + props.hintType} />
    )
}

export default Hint;