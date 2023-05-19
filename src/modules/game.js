const game = async (gameUrl, scores) => {
  const response = await fetch(gameUrl);
  await response.json().then((newData) => {
    scores.replaceChildren();
    newData.result.forEach((score) => {
      const li = document.createElement('li');
      li.classList.add('score');
      li.innerHTML = `${score.user}: ${score.score}`;
      scores.appendChild(li);
    });
  });
};

export default game;