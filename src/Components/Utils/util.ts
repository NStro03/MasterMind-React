import { DEFAULT_HINT_COLOR, DEFAULT_PEG_COLOR, PEGS_PER_ATTEMPT, TOTAL_ATTEMPTS } from "./constants";

// defaultPegColor: string, pegsPerAttempt: number, totalAttempts:number
export function initializeBoard() {
    const boardColors = []

    for (let iterAttempt = 0; iterAttempt < TOTAL_ATTEMPTS; iterAttempt++) {
        let pegColors = []

        for (let iterPeg = 0; iterPeg < PEGS_PER_ATTEMPT; iterPeg++) {
            pegColors.push(DEFAULT_PEG_COLOR)
        }

        boardColors.push(pegColors)
    }

    return boardColors;
}

export function initializeBoardHints() {
    const boardHints = []
    for (let iterAttempt = 0; iterAttempt < TOTAL_ATTEMPTS; iterAttempt++) {
        let hintColors = []
        
        for (let iterPeg = 0; iterPeg < PEGS_PER_ATTEMPT; iterPeg++) {
            hintColors.push(DEFAULT_HINT_COLOR)
        }

        boardHints.push(hintColors)
    }

    return boardHints;
}