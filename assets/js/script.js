/**
 * cashing the Dom for future use
 */
let userScore = 0;
let computerScore = 0;
const userScoreSpan =  document.getElementById("user-score");
const computerScoreSpan =  document.getElementById("computer-score");
const scoreDiv = document.querySelector(".score");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorDiv = document.getElementById("scissor");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices [randomNum];
}

function win(user, computer){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML =computerScore;
    resultDiv.innerHTML = user + " beats " + computer +" You Win!"
}

function lose(){

}

function draw() {

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
    }
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