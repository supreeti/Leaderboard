const Scores = async (gameUrl, user, score) => {
  await fetch(gameUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
};
export default Scores;
