var randomNum = 0

//inputs
var min = document.querySelector('#min-input')
var max = document.querySelector('#max-input')
var chalOne = document.querySelector('#name-one-input')
var chalTwo =  document.querySelector('#name-two-input')
var guessOne = document.querySelector('#guess-one-input')
var guessTwo = document.querySelector('#guess-two-input')
var winnerCards = document.querySelector('.right')

//buttons
var updateBtn = document.querySelector('#update-btn')
var submitBtn = document.querySelector('#submit-btn')
var resetBtn = document.querySelector('#reset-btn')
var clearBtn = document.querySelector('#clear-btn')

updateBtn.addEventListener('click', function(e){
  e.preventDefault();
  getRandomNum()
});

submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  saveInputs();
})

function getRandomNum() {
  min = min.value;
  max = max.value;
  randomNum = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNum)
  document.querySelector('#min-display').innerText = min;
  document.querySelector('#max-display').innerText = max;
}

function saveInputs() {
  chalOne = chalOne.value;
  chalTwo = chalTwo.value;
  guessOne = guessOne.value;
  guessTwo = guessTwo.value;
  document.querySelector('#chal-one').innerText = chalOne;
  document.querySelector('#guess-one').innerText = guessOne;
  document.querySelector('#chal-two').innerText = chalTwo;
  document.querySelector('#guess-two').innerText = guessTwo;
  checkGuesses('chalOne', guessOne)
  checkGuesses('chalTwo', guessTwo)
}

function checkGuesses(name, guess) {
  if (guess > randomNum) {
    document.querySelector(`#feedback-${name}`).innerText = "That's too high!"
  } else if (guess < randomNum) {
    document.querySelector(`#feedback-${name}`).innerText = "That's too low!"
  } else {
    document.querySelector(`#feedback-${name}`).innerText = "That's correct!"
    findWinner(name)
  }
}

function findWinner(name) {
  var winner
  if (name === 'chalOne') {
    winner = chalOne;
  } else {
    winner = chalTwo;
  }
  createNewCard(winner)
}

function createNewCard(winner) {
  winnerCards.innerHTML +=
  `<article class='winner-card'>
      <div>
        <h3>${chalOne}</h3>
        <p>vs.</p>
        <h3>${chalTwo}</h3>
      </div>
      <div>
        <h2>${winner}</h2>
        <h2>WINNER</h2>
      </div>
    </article>`
}


