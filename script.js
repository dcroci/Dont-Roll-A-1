'use strict';
let rollBtn = document.querySelector('.btn--roll');
let currentScore = document.querySelectorAll('.current-score');
let diceImg = document.querySelector('img');
let activePlayer = document.querySelector('.player--active');
let section = document.querySelectorAll('section');
let holdBtn = document.querySelector('.btn--hold');
let newGameBtn = document.querySelector('.btn--new');
let wins = document.querySelectorAll('.score');

let getDiceRoll = () => {
  return Math.ceil(Math.random() * 6);
};

rollBtn.addEventListener('click', () => {
  let userNum = getDiceRoll();
  diceImg.src = `dice-${userNum}.png`;
  if (userNum !== 1) {
    for (let i = 0; i < section.length; i++) {
      if (section[i].classList.contains('player--active')) {
        currentScore[i].textContent =
          Number(currentScore[i].textContent) + userNum;
      }
      if (currentScore[i].textContent >= 100) {
        section[i].classList.add('player--winner');
      }
      if (section[i].classList.contains('player--winner')) {
        wins[i].textContent = Number(wins[i].textContent) + 1;
      }
    }
  } else {
    for (let i = 0; i < section.length; i++) {
      if (section[i].classList.contains('player--active')) {
        currentScore[i].textContent = 0;
      }
      section[i].classList.toggle('player--active');
    }
  }
});

//saves score to player and switches active player
holdBtn.addEventListener('click', () => {
  for (let i = 0; i < section.length; i++) {
    section[i].classList.toggle('player--active');
  }
});

//resets game back to 0 points, and player 1 is now active
newGameBtn.addEventListener('click', () => {
  for (let i = 0; i < section.length; i++) {
    currentScore[i].textContent = 0;
    if (section[1].classList.contains('player--active')) {
      section[1].classList.toggle('player--active');
      section[0].classList.toggle('player--active');
    }
    if (section[i].classList.contains('player--winner')) {
      section[i].classList.remove('player--winner');
    }
  }
});
