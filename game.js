const gameMoves = ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;
let rounds = 5;
let playerWins = false;
let gameTie = false;

function computerPlay() {
    const computerMove = Math.floor(Math.random()*gameMoves.length);
    return gameMoves[computerMove];
}

function playRound(playerSelection,computerSelection) {
    if(playerSelection == "rock") {
        if(computerSelection == "paper") {
            console.log("You lose!, Paper beats rock");
            playerWins = false;
            gameTie = false;
        } else if(computerSelection == "rock") {
            console.log("The game is a tie!");
            playerWins = false;
            gameTie = true;
        } else if(computerSelection == "scissors") {
            console.log("You won! Rock beats scissors");
            playerWins = true;
            gameTie = false;
        }
    } else if(playerSelection == "paper") {
        if(computerSelection == "scissors") {
            console.log("You lose!, scissors beats paper");
            playerWins = false;
            gameTie = false;
        } else if(computerSelection == "rock") {
            console.log("You won! Paper beats rock!");
            playerWins = true;
            gameTie = false;
        } else if(computerSelection == "paper") {
            console.log("The game is a tie!");
            playerWins = false;
            gameTie = true;
        }
    } else if(playerSelection == "scissors") {
        if(computerSelection == "paper") {
            console.log("You won!, Scissors beats paper");
            playerWins = true;
            gameTie = false;
        } else if(computerSelection == "rock") {
            console.log("You lose! Rock beats paper");
            playerWins = false;
            gameTie = false;
        } else if(computerSelection == "scissors") {
            console.log("The game is a tie");
            playerWins = false;
            gameTie = true;
        }
    }
}

function game(rounds) {
    alert(`Welcome! This is a Rock, Paper and Scissors Game! This is a ${rounds} rounds game`);
    for(let i = 0; i < rounds; i++) {
        const playerSelection = prompt("So... Rock, Paper or Scissors??? : ").toLowerCase();
            if(gameMoves.includes(playerSelection) === false) {
                alert("Invalid Entry!!! Please, Try again!!!");
                i--;
            } else {
                const computerSelection = computerPlay();
                playRound(playerSelection, computerSelection);
                if(playerWins) {
                    scorePlayer += 1;
                    console.log(`Player score: ${scorePlayer} | Computer Score: ${scoreComputer}`);
                } else if(gameTie) {
                    scorePlayer += 0;
                    scoreComputer += 0;
                    console.log(`Player score: ${scorePlayer} | Computer Score: ${scoreComputer}`);
                } else {
                    scoreComputer += 1;
                    console.log(`Player score: ${scorePlayer} | Computer Score: ${scoreComputer}`);
                }
            }
    }
    if(scorePlayer > scoreComputer) {
        return `Congrats, You won! --> Final Score | Player Score: ${scorePlayer} Computer Score: ${scoreComputer}`
    } else if(scorePlayer === scoreComputer) {
        return `Oh, This is a tie! --> Final Score | Player Score: ${scorePlayer} Computer Score: ${scoreComputer}`
    } else {
        return `Oh no, You lose! --> Final Score | Player Score: ${scorePlayer} Computer Score: ${scoreComputer}`
    }
}

console.log("Welcome to the game!")
console.log(game(rounds));