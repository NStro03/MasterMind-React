import React, { useState } from "react";
import ColorPalette from "../ColorPalette";
import "./style.css"
import {COLOR_LIST, INITIAL_GAME_STATE, TOTAL_ATTEMPTS} from "../Utils/constants";
import AttemptsContainer from "../AttemptsContainer";
import { initializeBoard } from "../Utils/util";


function Game() {

    const [gameState, setGameState] = useState(INITIAL_GAME_STATE)
    const [boardColors, setboardColors] = useState(initializeBoard())
    // const [boardHints, setBoardHints] = useState(initialBoardHints)

    function colorProvider(colorIndex: number) {
        console.log("Color Provided: " + COLOR_LIST[colorIndex])
        setGameState(preVal => ({...preVal, selectedColor: COLOR_LIST[colorIndex]}))
    }

    function colorAcceptor(pegPosition: number) {
        console.log("pegPosition Received: " + pegPosition)
        var newBoardColors = [...boardColors]
        let oldColor = newBoardColors[gameState.attemptsMade].splice(pegPosition, 1, gameState.selectedColor)
        console.log("Chnaged from " + oldColor + " --> " + gameState.selectedColor)

        setboardColors(newBoardColors);
    }

    return (
        <div className="GameContainer">
            {/* <div className="filler"></div> */}
            <AttemptsContainer boardColors={boardColors} attemptsMade={gameState.attemptsMade} selectedColor={gameState.selectedColor} action={colorAcceptor}/>
            <ColorPalette colorMap={COLOR_LIST} action={colorProvider}/>
        </div>
    );
}

export default Game;