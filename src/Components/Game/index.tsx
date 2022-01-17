import React, { useState } from "react";
import swal from 'sweetalert';

// Local Imports
import ColorPalette from "../ColorPalette";
import AttemptsContainer from "../AttemptsContainer";
import { COLOR_LIST, INITIAL_GAME_STATE, TOTAL_ATTEMPTS } from "../Utils/constants";
import { generateSolution, initializeBoard, initializeBoardHints, verifyAttempt } from "../Utils/util";
import "./style.css"

const gameSolution = generateSolution();
const initialBoadColors = initializeBoard();
const initialBoardHints = initializeBoardHints();

function Game() {

    const [gameState, setGameState] = useState(INITIAL_GAME_STATE)
    const [boardColors, setboardColors] = useState(initialBoadColors)
    const [boardHints, setBoardHints] = useState(initialBoardHints)
    const [solution, setSolution] = useState(gameSolution)

    function colorProvider(colorIndex: number) {

        setGameState(preVal => ({ ...preVal, selectedColor: COLOR_LIST[colorIndex] }))
    }

    function colorAcceptor(pegPosition: number) {
        var newBoardColors = [...boardColors]
        newBoardColors[gameState.attemptsMade].splice(pegPosition, 1, gameState.selectedColor)

        setboardColors(newBoardColors);
    }

    function checkSolution() {
        
        const userAttempt = [...boardColors[gameState.attemptsMade]]

        let solutionToCheck = [...solution]
    
        const {isAttemptCorrect, attemptCheckResult} = verifyAttempt(solutionToCheck, userAttempt)

        updateStatesBasedOnAttemptCheckResult(attemptCheckResult);

        if (isAttemptCorrect) {
            swal({
                title: "Awesome!",
                text: "You got it correct in " + (gameState.attemptsMade + 1) + " attempts.",
                icon: "success"
            })
                .then(() => resetGame());

        }
        else if (gameState.attemptsMade + 1 >= TOTAL_ATTEMPTS) {
            swal({
                title: "Ouch!",
                text: "Maximum allowed attempts have been utilised.",
                icon: "error"
            })
                .then(() => resetGame());
        }

    }

    function updateStatesBasedOnAttemptCheckResult(attemptCheckResult: Array<string>) {
        // Set Hint values in boardHints
        var newBoardHints = [...boardHints]
        newBoardHints[gameState.attemptsMade] = attemptCheckResult;
        setBoardHints(newBoardHints)

        // Increment Attempt Count
        setGameState(preVal => ({ ...preVal, attemptsMade: preVal.attemptsMade + 1 }))
    }

    function resetGame() {
        setGameState(INITIAL_GAME_STATE);
        setboardColors([...initializeBoard()]);
        setBoardHints([...initializeBoardHints()]);
        setSolution([...generateSolution()]);
    }

    return (
        <div className="GameContainer">
            <AttemptsContainer boardColors={boardColors} boardHints={boardHints} attemptsMade={gameState.attemptsMade} selectedColor={gameState.selectedColor} action={colorAcceptor} checkSolutionAction={checkSolution} />
            <ColorPalette colorMap={COLOR_LIST} selectedColor={gameState.selectedColor} action={colorProvider} />
        </div>
    );
}

export default Game;