import Hint from "../Hint";

function HintsContainer(props:{attemptHints: Array<string>}) {
    const hintComponents = props.attemptHints.map((hintType: string) => 
    <Hint type={hintType} />
    )

    return(
        <div className="hintsContainer">
            {hintComponents}
        </div>
    )
}

export default HintsContainer;