// ROCK PAPER SCISSORS...
// COMPUTER WILL GENERATE A RANDOM CHOICE OF ROCK, PAPER, OR SCISSORS
// math.Random will give a random number from 0 - 1. We want 3 options, so split up the range from 0-.33, .33 - .66, and .66 to 1.
// USER WILL BE PROMPTED TO CHOOSE ONE OF THREE OPTIONS: ROCK, PAPER, OR SCISSORS
// IF USER CHOOSES ROCK, IT BEATS SCISSORS, BUT LOSES TO PAPER
// IF USER CHOOSES PAPER, IT BEATS ROCK, BUT LOSES TO SCISSORS
// IF USER CHOOSES SCISSORS, IT BEATS PAPER, BUT LOSES TO ROCK

//Getting User Input

const choices = ('rock','paper','scissors')

// Getting user choice
const getUserChoice = prompt('Do you want rock, paper, or scissors?').toLocaleLowerCase();
    if(getUserChoice === "paper" || getUserChoice === "rock" || getUserChoice === "scissors") {
    } else {
        console.log('Error! Try again.');
    }

// Getting computer choice
let getComputerChoice = (Math.random() * 3);
    if(getComputerChoice <= 1) {
        getComputerChoice = 'rock';
    } else if(getComputerChoice <= 2) {
        getComputerChoice = 'paper';
    } else {
        getComputerChoice = 'scissors';
        }

console.log(getComputerChoice)

// Playing a round
function playRound (getUserChoice, getComputerChoice) {
    if(getUserChoice === 'rock' && getComputerChoice === 'paper') {
        console.log('You lose! Paper beats rock.');
    } else if (getUserChoice === 'rock' && getComputerChoice === 'scissors') {
        console.log('You win! Rock beats scissors.');
    } else { 
        console.log("It's a tie. Try again!");
    }
}

playRound();

