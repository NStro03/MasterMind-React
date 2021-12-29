import React, { useState } from "react";
import ColorPalette from "../ColorPalette";
import "./style.css"
import {colorList, initialState} from "../Utils/constants";


function Game() {

    const [state, setstate] = useState(initialState)

    function colorProvider(col: string) {
        console.log("Color Provided: " + col)
        setstate({selectedColor: col, attemptsMade: state.attemptsMade})
    }

    function colorAcceptor(colId: number) {
        console.log("Color Received: " + colId)
    }

    return (
        <div className="GameContainer">
            <div className="filler"></div>
            {/* <Attempts /> */}
            <ColorPalette colorMap={colorList} action={colorProvider}/>
        </div>
    );
}

export default Game;