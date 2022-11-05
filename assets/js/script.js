
//Inspired by video on TextBox validation by Thapa Technical

function userAccess () {
    let formDiv = document.getElementById("sign-in-div"); 
    let gameArena = document.getElementById("game-arena");
    let username = document.getElementById("username").value;

    
    if(username === "") {
        gameArena.style.display = 'none';
        document.getElementById("message").innerHTML="Please fill in username before proceeding";
        document.getElementById("message").style.color ="white";
    }
    else {
        gameArena.style.display = 'block';
        formDiv.style.display = 'none';
        document.getElementById("message").innerHTML="";
      
    }
}

//Inspired by Love Maths and Rock Paper Scissors Game Using HTML & CSS & JavaScript by True Coder
let choices = ["rock", "paper", "scissors", "lizard", "spock"];

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

    let message = document.getElementById("result");
    message.style.color = "green";

    if (winPoints >= 10) {
        document.getElementById("win").innerText = 0;
        document.getElementById("draw").innerText = 0;
        document.getElementById("lose").innerText = 0;
        document.getElementById("result").innerHTML = `<p><strong>YOU ARE THE VICTOR!!!!</strong></p>`;
    } else {
        document.getElementById("result").innerHTML = `<p>Congradulations....You Win!!! The Computer chose ${computerChoice}</p>`;
    }


}

function drawScore (computerChoice) {
    let drawPoints = parseInt(document.getElementById("draw").innerText);
    document.getElementById("draw").innerText = ++drawPoints;

    let message = document.getElementById("result");
    message.style.color = "orange";

    if (drawPoints >= 10) {
        document.getElementById("win").innerText = 0;
        document.getElementById("draw").innerText = 0;
        document.getElementById("lose").innerText = 0;
        document.getElementById("result").innerHTML = `<p><strong>IT IS A STALEMATE!</strong></p>`;
    } else {
        document.getElementById("result").innerHTML = `<p>It is a draw! The Computer chose ${computerChoice}</p>`;
    }
}

function loseScore (computerChoice) {
    let losePoints = parseInt(document.getElementById("lose").innerText);
    document.getElementById("lose").innerText = ++losePoints;

    let message = document.getElementById("result");
    message.style.color = "red";

    if (losePoints >= 10) {
        document.getElementById("win").innerText = 0;
        document.getElementById("draw").innerText = 0;
        document.getElementById("lose").innerText = 0;
        document.getElementById("result").innerHTML = `<p><strong>SKYNET RULES!!!!</strong></p>`;
    } else {
        document.getElementById("result").innerHTML = `<p>Sorry, You lost! The Computer chose ${computerChoice}</p>`;
    }
}


