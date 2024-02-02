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
        userChoice = getUserChoice;
    } else {
        console.log('Error! Try again.');
    }

// Getting computer choice
const getComputerChoice = Math.floor((Math.random() * 3));
    if(getComputerChoice === 0) {
        computerChoice = 'rock';
    } else if(getComputerChoice === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
        }


console.log(computerChoice);

// Playing a round
function playRound(getUserChoice, getComputerChoice) {
    if (userChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        console.log('Sorry, paper beats rock. You lose!')
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        console.log('Sorry, scissors beats paper. You lose!')
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        console.log('Sorry, rock beats paper. You lose!')
    }
    else {
        console.log('Congratulations, you win!')
    }
}


playRound();

