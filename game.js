const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const comScoreSpan = document.getElementById('comScore')
const youScoreSpan =document.getElementById('youScore')
const tieScoreSpan =document.getElementById('tieScore')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Draw!'
    tieScoreSpan.innerText = parseInt(tieScoreSpan.innerText) + 1
  }

  if ((computerChoice === 'rock' && userChoice === "paper") || 
  (computerChoice === 'paper' && userChoice === "scissors") || 
  (computerChoice === 'scissors' && userChoice === "rock")) {
    result = 'You Won!'
    youScoreSpan.innerText = parseInt(youScoreSpan.innerText) + 1
  }

  if ((computerChoice === 'rock' && userChoice === "scissors") ||
    (computerChoice === 'paper' && userChoice === "rock") ||
    (computerChoice === 'scissors' && userChoice === "paper")) {
    result = 'You Lost!'
    comScoreSpan.innerText = parseInt(comScoreSpan.innerText) + 1
  }
  
  resultDisplay.innerHTML = result
}