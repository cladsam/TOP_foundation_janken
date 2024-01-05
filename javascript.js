const possibleChoices = {
    Rock: 'Rock',
    Paper: 'Paper',
    Scissor: 'Scissor',
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


    if (playerSelectionNormalized === computerSelection) return "Tie";
    let playWin;
    switch (playerSelectionNormalized) {
        case possibleChoices.Paper:
            playWin = computerSelection === possibleChoices.Rock ? true : false;
            break;
        case possibleChoices.Rock:
            playWin = computerSelection === possibleChoices.Scissor ? true : false;
            break;
        case possibleChoices.Scissor:
            playWin = computerSelection === possibleChoices.Paper ? true : false;
            break;
    }
    return playWin ? `You win! ${playerSelectionNormalized} beats ${computerSelection}` : `You Loose! ${computerSelection} beats ${playerSelectionNormalized}`;
}

function normalizeSelection(playerSelection) {
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

};

