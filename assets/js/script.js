/**
 * cashing the Dom for future use
 */
const playerScore = 0;
const computerScore = 0;
const playerScoreSpan =  document.getElementById("user-score");
const computerScoreSpan =  document.getElementById("computer-score");
const scoreDiv = document.querySelector(".score");
const resultDiv = document.querySelector(".result");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorDiv = document.getElementById("scissor");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNum = Math.floor(Math.random() * 3);
}
getComputerChoice()

function game(userChoice) {

}

main();

function main() {

    rockDiv.addEventListener('click', function(){
    game("rock")
    })

    paperDiv.addEventListener('click', function(){
        game("paper")
    })

    scissorDiv.addEventListener('click', function(){
        game("scissor")
    })
}