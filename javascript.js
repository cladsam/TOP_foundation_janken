const possibleChoices = {
    Rock: 'Rock',
    Paper: 'Paper',
    Scissor: 'Scissor',
}
const gameResult = {
    Tie: 0,
    PlayerWin: 1,
    PlayerLoose: 2,
}

let getComputerChoice = () => {
    choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return possibleChoices.Rock
        case 1:
            return possibleChoices.Paper
        case 2:
            return possibleChoices.Scissor

    };
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionNormalized = normalizeSelection(playerSelection)

    let playWin;
    if (playerSelectionNormalized === computerSelection) return gameResult.Tie;

    switch (playerSelectionNormalized) {
        case possibleChoices.Paper:
            playWin = computerSelection === possibleChoices.Rock ? gameResult.PlayerWin : gameResult.PlayerLoose;
            break;
        case possibleChoices.Rock:
            playWin = computerSelection === possibleChoices.Scissor ? gameResult.PlayerWin : gameResult.PlayerLoose;
            break;
        case possibleChoices.Scissor:
            playWin = computerSelection === possibleChoices.Paper ? gameResult.PlayerWin : gameResult.PlayerLoose;
            break;
    }
    return playWin;
}

function normalizeSelection(playerSelection) {
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

};

