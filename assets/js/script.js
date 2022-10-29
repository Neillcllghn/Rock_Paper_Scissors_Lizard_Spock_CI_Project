//Inspired by Love Maths and Rock Paper Scissors Game Using HTML & CSS & JavaScript by True Coder
let choices = ["rock", "paper", "scissors", "lizard", "spock"];

//adding an event listener to all the buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for(let button of buttons) {
      
        button.addEventListener("click", function () {
            let i = Math.floor(Math.random() * 5);
            let computerChoice = choices[i];
            computerChoice =  choices[i];
            let userChoice = this.getAttribute("data-type");
            game(userChoice, computerChoice);
        });
      
    } function game(userChoice, computerChoice) { 
        if(userChoice === "paper" && computerChoice === "rock" || userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "rock" && computerChoice === "lizard" || userChoice === "lizard" && computerChoice === "spock" || userChoice === "spock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "lizard" || userChoice === "lizard" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "spock" || userChoice === "spock" && computerChoice === "rock") {
            winScore(computerChoice);
        } else if (userChoice === computerChoice) {
            drawScore(computerChoice);
        } else {
            loseScore(computerChoice);
        }
        
    }

    
});


function winScore (computerChoice) {
    let winPoints = parseInt(document.getElementById("win").innerText);
    document.getElementById("win").innerText = ++winPoints;
    document.getElementById("result").innerHTML = `<p>Congradulations....You Win!!! The Computer chose ${computerChoice}</p>`;

    let message = document.getElementById("result");
    message.style.color = "green";


}

function drawScore (computerChoice) {
    let drawPoints = parseInt(document.getElementById("draw").innerText);
    document.getElementById("draw").innerText = ++drawPoints;
    document.getElementById("result").innerHTML = `<p>It is a draw! The Computer chose ${computerChoice}</p>`;

    let message = document.getElementById("result");
    message.style.color = "orange";
}

function loseScore (computerChoice) {
    let losePoints = parseInt(document.getElementById("lose").innerText);
    document.getElementById("lose").innerText = ++losePoints;
    document.getElementById("result").innerHTML = `<p>Sorry, You lost! The Computer chose ${computerChoice}</p>`;

    let message = document.getElementById("result");
    message.style.color = "red";
}


