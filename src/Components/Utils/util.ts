import { DEFAULT_HINT_COLOR, DEFAULT_PEG_COLOR, PEGS_PER_ATTEMPT, TOTAL_ATTEMPTS } from "./constants";

// defaultPegColor: string, pegsPerAttempt: number, totalAttempts:number
export function initializeBoard() {
    const boardColors = []
    for (let iterAttempt = 0; iterAttempt < TOTAL_ATTEMPTS; iterAttempt++) {
        let pegs = []
        // let hints = []
        for (let iterPeg = 0; iterPeg < PEGS_PER_ATTEMPT; iterPeg++) {
            pegs.push(DEFAULT_PEG_COLOR)
            // hints.push(defaultHintColor)
        }
        let attemptColors = {
            "pegColors" : pegs
            // "hintColors" : hints
        };

        boardColors.push(attemptColors)
    }

    return boardColors;
}

// // Function to generateBoardColors(totalAttempts, #ofPegs, defaultPegColor) --> returns totalAttempts X #ofPegs map for attempts and each attempt will have a map for #ofPegs for Hint
// boardColors = [
//     0: { pegs:[], hints[] },
//     1: {}
// ]

// boardColors[0].hints[1]
// setConstantValu(preVal => (...preVal, boardColors[1].hints[1] = 2))
// // search to change only a part of array. The above is for Objects only.
// // default peg color in constant