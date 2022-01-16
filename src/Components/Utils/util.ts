// Local Imports
import { COLOR_LIST, DEFAULT_HINT_COLOR, DEFAULT_PEG_COLOR, PEGS_PER_ATTEMPT, TOTAL_ATTEMPTS } from "./constants";

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

export function generateSolution(){
    const solution = []
    for (let i = 0; i < PEGS_PER_ATTEMPT; i++) {
        solution.push(COLOR_LIST[Math.floor(Math.random() * (COLOR_LIST.length))]);
        
    }

    return solution;
}

export function verifyAttempt(solutionToCheck: Array<string>, userAttempt: Array<string>) {
    let attemptCheckResult = []
    let isAttemptCorrect = false;

    // Check for correctColorCorrectPosition
    for (let index = 0; index < PEGS_PER_ATTEMPT; index++) {
        if (solutionToCheck[index] === userAttempt[index]) {
            attemptCheckResult.push("correctColorCorrectPosition");
            solutionToCheck[index] = "";
            userAttempt[index] = "";
        }
    }

    // Check if userAttempt does not match the solution completely
    if (attemptCheckResult.length < PEGS_PER_ATTEMPT) {

        // Check for correctColorIncorrectPosition
        for (let index = 0; index < PEGS_PER_ATTEMPT; index++) {

            const color = userAttempt[index];
            if (color === "") continue;

            const colorIndexInSolution = solutionToCheck.indexOf(color);

            if (colorIndexInSolution !== -1) {
                attemptCheckResult.push("correctColorIncorrectPosition")
                solutionToCheck[colorIndexInSolution] = "";
                userAttempt[index] = "";
            }
        }

        // Remaining number of colors in decodedSolution are incorrectColor
        for (let index = 0; index < PEGS_PER_ATTEMPT; index++) {
            if (userAttempt[index] === "") continue;
            attemptCheckResult.push("incorrectColor");
        }

    }
    else {
        isAttemptCorrect = true;
    }

    return {isAttemptCorrect, attemptCheckResult}
}