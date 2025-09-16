export const increaseCount = (id) => {
  const scoreCount = document.querySelector(`#score-count-${id}`);
  let score = parseInt(scoreCount.textContent);
  score++;
  scoreCount.textContent = score;
};

export const decreaseCount = (id) => {
  const scoreCount = document.querySelector(`#score-count-${id}`);
  let score = parseInt(scoreCount.textContent);
  if (score > 0) {
    score--;
  }
  scoreCount.textContent = score;
};