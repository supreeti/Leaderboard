const game = async (gameUrl, scores) => {
  const response = await fetch(gameUrl);
  await response.json().then((newData) => {
    scores.replaceChildren();
    newData.result.forEach((score) => {
      const li = document.createElement('tr');
      li.classList.add('score');
      li.innerHTML = `<tr><td>${score.user}</td> :<td>${score.score}</td></tr>`;
      scores.appendChild(li);
    });
  });
};

export default game;