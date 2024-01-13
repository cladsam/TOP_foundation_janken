let game_started = true;
let player_score = 0;
let computer_score = 0;


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


function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    let tour = 1;

    do {
        // Play one round    
        let userChoice = prompt("Rock, Paper or Scissor ?");
        const computerChoice = getComputerChoice();
        const turnResult = playRound(userChoice, computerChoice);

        // display round result    
        switch (turnResult) {
            case gameResult.Tie:
                console.log("It's a Tie !");;
                break;
            case gameResult.PlayerWin:
                console.log("You win " + userChoice + " beats " + computerChoice);
                scorePlayer++;
                break;
            case gameResult.PlayerLoose:
                console.log("You loose " + computerChoice + " beats " + userChoice);
                scoreComputer++;
                break
        }
        if (scoreComputer < 5 && scorePlayer < 5) {
            console.log("Actual score : Player " + scorePlayer + " Computer " + scoreComputer);
        }
    }
    while (scoreComputer < 5 && scorePlayer < 5)

    // display Game result
    scoreComputer > scorePlayer ? console.log("You loss " + scoreComputer + " to " + scorePlayer) : console.log("You won " + scorePlayer + " to " + scoreComputer);

}


const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissor = document.querySelector("#btnScissor");
btnPaper.addEventListener('click', () => { playRound(possibleChoices.Paper, getComputerChoice()) });
btnRock.addEventListener('click', () => { playRound(possibleChoices.Rock, getComputerChoice()) });
btnScissor.addEventListener('click', () => { playRound(possibleChoices.Scissor, getComputerChoice()) });




// Code Obsolete (used for console version of the game)
function normalizeSelection(playerSelection) {
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

};