import React, { useState } from "react";
import ColorPalette from "../ColorPalette";
import "./style.css"
import {COLOR_LIST, INITIAL_GAME_STATE, PEGS_PER_ATTEMPT, TOTAL_ATTEMPTS} from "../Utils/constants";
import AttemptsContainer from "../AttemptsContainer";
import { generateSolution, initializeBoard, initializeBoardHints } from "../Utils/util";

const gameSolution = generateSolution();
const initialBoadColors = initializeBoard();
const initialBoardHints = initializeBoardHints();

function Game() {

    const [gameState, setGameState] = useState(INITIAL_GAME_STATE)
    const [boardColors, setboardColors] = useState(initialBoadColors)
    const [boardHints, setBoardHints] = useState(initialBoardHints)
    const [solution, setSolution] = useState(gameSolution)
    console.log(gameSolution)
    console.log(solution)

    function colorProvider(colorIndex: number) {
        console.log("Color Provided: " + COLOR_LIST[colorIndex])
        console.log(solution)

        setGameState(preVal => ({...preVal, selectedColor: COLOR_LIST[colorIndex]}))
        console.log(solution)

    }

    function colorAcceptor(pegPosition: number) {
        console.log("pegPosition Received: " + pegPosition)
        var newBoardColors = [...boardColors]
        let oldColor = newBoardColors[gameState.attemptsMade].splice(pegPosition, 1, gameState.selectedColor)
        console.log("Changed from " + oldColor + " --> " + gameState.selectedColor)

        setboardColors(newBoardColors);
    }

    function checkSolution(){
        const userAttempt = [...boardColors[gameState.attemptsMade]]
        console.log("Selected combo: ")
        console.log(userAttempt)

        let decodedSolution = Array()
        solution.forEach(colorCode => decodedSolution.push(COLOR_LIST[colorCode]));

        console.log("Solution Code: ")
        console.log(solution)
        console.log("Solution decoded: ")
        console.log(decodedSolution)

        let attemptCheckResult = []

        // Check for correctColorCorrectPosition
        for (let index = 0; index < decodedSolution.length; index++) {
            if(decodedSolution[index] === userAttempt[index]) {
                attemptCheckResult.push("correctColorCorrectPosition");
                decodedSolution.splice(index, 1);
                userAttempt.splice(index, 1);
                index--;
            }
        }

        // Check for correctColorIncorrectPosition
        for (let index = 0; index < userAttempt.length; index++) {
            if(decodedSolution.includes(userAttempt[index])){
                attemptCheckResult.push("correctColorIncorrectPosition")
                decodedSolution.splice(decodedSolution.lastIndexOf(userAttempt[index]), 1)
                index--;
            }
        }

        // Remaining number of colors in decodedSolution are incorrectColor
        for (let index = 0; index < decodedSolution.length; index++) {
            attemptCheckResult.push("incorrectColor");
        }
        
        // Set Hint values in boardHints
        var newBoardHints = [...boardHints]
        for (let index = 0; index < PEGS_PER_ATTEMPT; index++) {
            newBoardHints[gameState.attemptsMade].splice(index, 1, attemptCheckResult[index])
        }
        setBoardHints(newBoardHints)

        // Increment Attempt Count
        setGameState(preVal => ({...preVal, attemptsMade: gameState.attemptsMade+1}))

    }

    return (
        <div className="GameContainer">
            {/* <div className="filler"></div> */}
            <AttemptsContainer boardColors={boardColors} boardHints={boardHints} attemptsMade={gameState.attemptsMade} selectedColor={gameState.selectedColor} action={colorAcceptor} checkSolutionAction={checkSolution}/>
            <ColorPalette colorMap={COLOR_LIST} selectedColor={gameState.selectedColor} action={colorProvider}/>
        </div>
    );
}

export default Game;