let game_started = true;
let scorePlayer = 0;
let scoreComputer = 0;
const imgRockSrc = "Images/Rock.png";
const imgPaperSrc = "Images/Paper.png";
const imgScissorSrc = "Images/Scissor.png"


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
};

function defineRoundWinner(playerSelection, computerSelection) {
    //  let playerSelectionNormalized = normalizeSelection(playerSelection);
    let roundWinner;
    if (playerSelection === computerSelection) return gameResult.Tie;

    switch (playerSelection) {
        case possibleChoices.Paper:
            roundWinner = computerSelection === possibleChoices.Rock ? gameResult.PlayerWin : gameResult.PlayerLoose;
            break;
        case possibleChoices.Rock:
            roundWinner = computerSelection === possibleChoices.Scissor ? gameResult.PlayerWin : gameResult.PlayerLoose;
            break;
        case possibleChoices.Scissor:
            roundWinner = computerSelection === possibleChoices.Paper ? gameResult.PlayerWin : gameResult.PlayerLoose;
            break;
    }
    return roundWinner;
}


// function game() {
//     // let scorePlayer = 0;
//     // let scoreComputer = 0;
//     let tour = 1;

//     do {
//         // Play one round    
//         let userChoice = prompt("Rock, Paper or Scissor ?");
//         const computerChoice = getComputerChoice();
//         const turnResult = playRound(userChoice, computerChoice);


//         if (scoreComputer < 5 && scorePlayer < 5) {
//             console.log("Actual score : Player " + scorePlayer + " Computer " + scoreComputer);
//         }
//     }
//     while (scoreComputer < 5 && scorePlayer < 5)

//     // display Game result
//     scoreComputer > scorePlayer ? console.log("You loss " + scoreComputer + " to " + scorePlayer) : console.log("You won " + scorePlayer + " to " + scoreComputer);

// }


const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissor = document.querySelector("#btnScissor");
const bntNewGame = document.querySelector("#btnNewGame");
btnPaper.addEventListener('click', () => { playRound(possibleChoices.Paper) });
btnRock.addEventListener('click', () => { playRound(possibleChoices.Rock) });
btnScissor.addEventListener('click', () => { playRound(possibleChoices.Scissor) });
bntNewGame.addEventListener('click', launchNewGame);
const imgChoiceUser = document.querySelector("#imgChoiceUser");
const imgChoiceComputer = document.querySelector("#imgChoiceComputer");
const turnResultP = document.querySelector("#turnResultP");
const scoreP = document.querySelector("#score")





// Code Obsolete (used for console version of the game)
function normalizeSelection(playerSelection) {
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

};

// Display the image of the choice made by the player
function displayChoice(btnChoice, choice) {
    switch (choice) {
        case possibleChoices.Rock:
            btnChoice.src = imgRockSrc;
            break;
        case possibleChoices.Paper:
            btnChoice.src = imgPaperSrc;
            break;
        case possibleChoices.Scissor:
            btnChoice.src = imgScissorSrc;
            break;
    }
    btnChoice.style.width = '20px';
    btnChoice.style.height = '20px';
    btnChoice.style.display = 'block';
}

//
function playRound(userChoice) {
    if (!game_started) { return; };


    // Display users choice
    let computerChoice = getComputerChoice();
    displayChoice(imgChoiceUser, userChoice);
    displayChoice(imgChoiceComputer, computerChoice);



    //Define winner   
    let turnResult = defineRoundWinner(userChoice, computerChoice);
    let turnResultString;
    switch (turnResult) {
        case gameResult.Tie:
            console.log("It's a Tie !");;
            turnResultString = "It's a Tie !";
            break;
        case gameResult.PlayerWin:
            console.log(`You win ${userChoice} beats ${computerChoice}`);
            turnResultString = `You win ${userChoice} beats ${computerChoice}`;
            scorePlayer++;
            break;
        case gameResult.PlayerLoose:
            console.log(`You loose ${computerChoice} beats ${userChoice}`);
            turnResultString = `You loose ${computerChoice} beats ${userChoice}`;
            scoreComputer++;
            break;
    }

    // Display turn result

    if (scoreComputer >= 5 || scorePlayer >= 5) {
        game_started = false;
        if (scoreComputer >= 5) {
            turnResultString = `You won the game ${scoreComputer} to ${scorePlayer}`;
        }
        else if (scorePlayer >= 5) {
            turnResultString = `You loss     the game ${scoreComputer} to ${scorePlayer}`;


        }
    }
    updateScoreDisplay(scorePlayer, scoreComputer, scoreP);
    turnResultP.textContent = turnResultString;
    turnResultP.style.display = "block"

}
function launchNewGame() {
    game_started = true;
    scorePlayer = 0;
    scoreComputer = 0;
    imgChoiceUser.style.display = "none";
    imgChoiceComputer.style.display = "none";
    turnResultP.textContent = "";
    turnResultP.style.display = "none"
    updateScoreDisplay("?", "?", scoreP);
}
function updateScoreDisplay(userScore, CompterScore, scoreP) {
    displayText = `Player : ${userScore} - computer : ${CompterScore}`;
    scoreP.textContent = displayText;
}