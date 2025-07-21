let score = 0;
let timeLeft = 30; // total seconds (2 minutes)
let gameActive = true;

const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const holes = document.querySelectorAll('.hole');
const gameArea = document.getElementById('whack-a-mole');
const btn = document.getElementById('newGame');

// Update timer on screen
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.innerText = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

updateTimerDisplay(); 

// Countdown timer
const countdown = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(countdown);
    clearInterval(moleInterval);
    gameActive = false;
    timerDisplay.innerText = "Time's up!";
    scoreDisplay.innerText = `You scored ${score}!!`
  } else {
    timeLeft--;
    updateTimerDisplay();
  }
}, 1000);

// Mole popping interval
const moleInterval = setInterval(() => {
  if (!gameActive) return;
  const randomIdx = Math.floor(Math.random() * holes.length);
  holes[randomIdx].classList.toggle('mole');
}, 300);

// Whack event
gameArea.addEventListener('click', (event) => {
  if (!gameActive) return;

  if (event.target.classList.contains('mole')) {
    score++;
    scoreDisplay.innerText = score;
  
    event.target.classList.remove('mole');
    event.target.classList.add('whacked');
  
    setTimeout(() => {
      event.target.classList.remove('whacked');
    }, 300);
  }
});

//reset/new game button
btn.addEventListener('click', () => {
    // clearInterval(countdown);
    // clearInterval(moleInterval);
  
    // score = 0;
    // gameActive = true;
  
    // const selectedTime = parseInt(document.getElementById('duration').value);
    // timeLeft = selectedTime;
  
    // scoreDisplay.innerText = score;
    // updateTimerDisplay();
  
    // // Remove all mole/whacked classes
    // holes.forEach(h => h.classList.remove('mole', 'whacked'));
  
    // startCountdown();
    // startMoles();
    window.location.reload()
  });