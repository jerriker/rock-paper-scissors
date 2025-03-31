let div = document.querySelector('.container')
function getComputerChoice() {
    let computerChoice
    let randomNumber = Math.random()
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = 'rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = 'paper'
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerChoice = 'scissors'
    }
    return computerChoice
}

function getHumanChoice(humanChoice) {
    resultDisplay(humanChoice)


}

function resultDisplay(humanChoice) {

    let computerChoice = getComputerChoice()
    let result


    if (computerChoice === humanChoice) {
        result = 'Tie'
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'Win 🎉'
    }
    else {
        result = 'Lose 😭'
    }
    // console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You ${result}`)
    let results = document.createElement('div')
    results.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. You ${result}`
    results.style.color = 'white'
    div.appendChild(results)
    div.removeChild(results)
}