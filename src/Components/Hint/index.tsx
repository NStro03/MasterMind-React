// Local Imports
import "./style.css"

function Hint(props:{hintType:string}) {

    return(
        <div className={"smallCircle " + props.hintType} />
    )
}

export default Hint;