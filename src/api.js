const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WBvUTDoh47FFuK3CA1Ak/scores/';
async function getScores() {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
}

async function addScore(obj) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  return data.result;
}
module.exports = { getScores, addScore };
