/* jshint esversion: 8 */

//cashing the Dom for future use
let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorDiv = document.getElementById("scissor");


//computer random choice code
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

// change the first latter to uppercase
function word(letter) {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    return "Scissor";
}

//win function 
function win(user, computer) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = word(user) + " beats " + word(computer) + ". You Win!";
}

//lose function 
function lose(user, computer) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = word(user) + " loses to " + word(computer) + ". You Lost...";
}

//draw function 
function draw(user, computer) {
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = word(user) + " friends " + word(computer) + ". It´s A Draw";
}

//game function
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
//restart score
document.getElementById("restart").addEventListener("click", resetScores);

function resetScores() {
    document.getElementById('user-score').innerText = 0;
    document.getElementById('computer-score').innerText = 0;
    userScore = 0;
    computerScore = 0;
    resultDiv.innerHTML ="Make Your Move";
}

//popup window 
document.getElementById("popup").addEventListener("click", alertBox);

function alertBox() {
    alert("Rock beats Scissors, Scissor beats Paper, Paper beats Rock");
}
main();

function main() {

    rockDiv.addEventListener('click', function () {
        game("rock");
    });

    paperDiv.addEventListener('click', function () {
        game("paper");
    });

    scissorDiv.addEventListener('click', function () {
        game("scissor");
    });
}