let score =  JSON.parse(localStorage.getItem('score')) || //THIS IS A DEFAULT OPERATOR
{
    wins: 0,
    losses: 0,
    ties: 0

}

updateScoreElement();


function getComputerMove() {
    let computerChoice = '';
    let randNum = Math.floor(Math.random() * 3); {
    if(randNum === 0) {
       computerChoice = 'rock';
         } else if(randNum === 1) {
       computerChoice = 'paper';
         } else {
            computerChoice = 'scissors';
        }
     }
     return computerChoice;
    }

function playGame(playerMove) {
    let computerChoice = getComputerMove();
    let result = '';
    if(playerMove === computerChoice) {
        result = 'Tie.'
    } else if((playerMove === 'rock' && computerChoice === 'paper') || 
    (playerMove === 'scissors' && computerChoice === 'rock') || 
    (playerMove === 'paper' && computerChoice === 'scissors')) { 
        result = 'You lose!'
    } else {
        result = 'You win!'
    }

    if(result === 'You win!') {
        score.wins += 1;
    } else if(result === 'You lose!') {
        score.losses += 1;
    } else if(result === 'Tie.')
        score.ties += 1;

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .textContent = result;

    document.querySelector('.js-user-comp-moves')
    .textContent = `You chose ${playerMove}. Computer chose ${computerChoice}.`;

}

function updateScoreElement() {
    document.querySelector('.js-score')
    .textContent = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

    if(score.wins === 5) {
        document.querySelector('.js-score').textContent = 'Congratulations! You won 5 rounds.';
        document.querySelector('.js-user-comp-moves')
        .textContent = '';
    } else if(score.losses === 5) {
        document.querySelector('.js-score').textContent = 'Sorry, you lost to the almighty computer.';

        document.querySelector('.js-user-comp-moves')
        .textContent = '';
    }
}   

const textElements = [];

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();

    document.querySelector('.js-user-comp-moves')
    .textContent = '';

    document.querySelector('.js-result')
    .textContent = ''; 
}