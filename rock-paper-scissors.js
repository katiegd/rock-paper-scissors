// ROCK PAPER SCISSORS...
// COMPUTER WILL GENERATE A RANDOM CHOICE OF ROCK, PAPER, OR SCISSORS
// math.Random will give a random number from 0 - 1. We want 3 options, so split up the range from 0-.33, .33 - .66, and .66 to 1.
// USER WILL BE PROMPTED TO CHOOSE ONE OF THREE OPTIONS: ROCK, PAPER, OR SCISSORS
// IF USER CHOOSES ROCK, IT BEATS SCISSORS, BUT LOSES TO PAPER
// IF USER CHOOSES PAPER, IT BEATS ROCK, BUT LOSES TO SCISSORS
// IF USER CHOOSES SCISSORS, IT BEATS PAPER, BUT LOSES TO ROCK

//Getting User Input

let choices = ('rock','paper','scissors')

// Getting user choice
const getUserChoice = prompt('Do you want rock, paper, or scissors?').toLocaleLowerCase();
    if(getUserChoice === "paper" || getUserChoice === "rock" || getUserChoice === "scissors") {
        console.log('You chose' + ' ' + getUserChoice);
    } else {
        console.log('Error! Try again.');
    }

// Getting computer choice
const getComputerChoice = (Math.random() * 3);
    if(getComputerChoice <= 1) {
        console.log('Computer chooses rock.')
    } else if(getComputerChoice <= 2) {
        console.log('Computer chooses paper.')
    } else {
        console.log('Computer chooses scissors.')
        }

// Playing a round
function playRound (getUserChoice, getComputerChoice) {
    if(getUserChoice === 'rock' && getComputerChoice === 'paper') {
        console.log('You lose! Paper beats rock.')
    } else if (getUserChoice === 'paper' && getComputerChoice === )
}
