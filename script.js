function getComputerChoice() {
    let randomNumber = Math.random()
    let computerChoice

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = 'rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = 'paper'
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerChoice = 'scissors'
    }
    return computerChoice
}


function getHumanChoice() {
    let userInput = prompt("Enter 'Rock', 'Paper' or 'Scissors' ", " ").toLowerCase()
    let humanChoice

    if (userInput === 'rock') {
        humanChoice = 'rock'
    } else if (userInput === 'paper') {
        humanChoice = 'paper'
    } else if (userInput === 'scissors') {
        humanChoice = 'scissors'
    }
    return humanChoice
}


let humanScore = 0
let computerScore = 0

function playRound(computerChoice, humanChoice) {
    let result
    if (computerChoice === humanChoice) {
        result = `It is a tie. Computer chose ${computerChoice} . You chose ${humanChoice}.`

    } else if (
        (computerChoice === 'rock' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'rock')
    ) {

        humanScore++
        result = `You won. Computer chose ${computerChoice} . You chose ${humanChoice}. ${humanChoice} beats ${computerChoice}`
    } else {
        computerScore++
        result = `You lose. Computer chose ${computerChoice} . You chose ${humanChoice}. ${humanChoice} loses to ${computerChoice}`
    }
    console.log(result)
    console.log(`Score: You ${humanScore}. Computer ${computerScore}`)
    return result;
}

function playGame() {
    let winner
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    if (humanScore > computerScore) {
        winner = `You won 🎉 with a result of: ${humanScore}`
    } else if (computerScore > humanScore) {
        winner = `Computer won 😭 with a result of: ${computerScore}`
    } else {
        winner = `It is a tie`
    }
    console.log(winner)
    return winner;
}
playGame()