import './style.css';

const scores = document.getElementById('scoreboard');

const name = document.getElementById('name');
const score = document.getElementById('score');
const leaderboard = (name, score) => {
  const li = document.createElement('li');
  li.textContent = `${name}     ${score}`;
  return li;
};

const submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  const list = leaderboard(name.value, score.value);
  scores.appendChild(list);

  name.value = '';
  score.value = '';
});
