import { DEFAULT_HINT_COLOR } from "../Utils/constants";
import "./style.css"

function Hint(props:{type:string}) {
    var hintClassName = DEFAULT_HINT_COLOR;
        if( props.type !== ""){
            hintClassName = props.type;
        }

    return(
        
        <div className={"smallCircle " + hintClassName}></div>
    )
}

export default Hint;