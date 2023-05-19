import './style.css';
import Scores from './modules/score.js';
import game from './modules/game.js';

let hitApi = '';
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Leaderboard',
  }),
})
  .then((res) => res.json())
  .then((game) => {
    const response = game.result;
    const gameId = response.substring(14, response.lastIndexOf(' '));
    hitApi = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
  });

const List = document.getElementById('scoreboard');
const Refresh = document.getElementById('refresh');
Refresh.addEventListener('click', () => {
  game(hitApi, List);
});

const Form = document.getElementById('add');
const Submit = document.getElementById('submit');
Submit.addEventListener('click', (e) => {
  e.preventDefault();
  const Name = document.getElementById('name');
  const Score = document.getElementById('score');
  if (Name.value && Score.value) {
    Scores(hitApi, Name.value, Score.value);
    Form.reset();
  }
});