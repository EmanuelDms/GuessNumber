const form = document.getElementById('form');
let btnRestart = document.getElementById('btnRestart');
form.onsubmit = handleSubmit;
btnRestart.onclick = restart;

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
  max: 10,
  attemptsNumber: 0,
  numberDrawn: function randomValue() {
    return Math.round(Math.random() * this.max);
  }
}

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
  attempt.innerHTML = `Tentativa: ${value}`;
}

function handleSubmit(e) {
  e.preventDefault();

  let kick = document.getElementById('kick').value;
  /* convert to a number */
  kick++; kick--;
  if(!kick && kick != 0){
    return alert('Digite algum valor!');
  }

  updateAttempt(attempt, ++Guess.attemptsNumber);
  console.log(numberDrawn);
  if(numberDrawn === kick) {
    playAgain();
    status.innerHTML = 'Parabéns, você acertou!';
    result.style.transition = '0.4s';
    result.style.backgroundColor = '#37c978';
    result.style.color = '#fff';
    status.style.color = '#fff';
    clear();
  }else if(numberDrawn > kick){
    status.innerHTML = 'O número é maior!';
    status.style.color = "#de4251";
    clear();
  }else if(numberDrawn < kick){
    status.innerHTML = 'O número é menor!';
    status.style.color = "#de4251";
    clear();
  }
};

function playAgain() {
  document.getElementById('btnRestart').style.display = 'flex';
};

function restart() {
  location.reload();
};

function clear() {
  document.getElementById('kick').value = '';
}