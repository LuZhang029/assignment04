
function playRockPaperScissors() {

    let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid input. Please enter rock, paper, or scissors.");
        return;
    }

    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultMessage = "";
    if (userChoice === computerChoice) {
        resultMessage = "It's a tie! Both players chose " + userChoice + ".";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        resultMessage = "You win! " + userChoice + " beats " + computerChoice + ".";
    } else {
        resultMessage = "You lose! " + computerChoice + " beats " + userChoice + ".";
    }

    alert(resultMessage);
}

playRockPaperScissors();