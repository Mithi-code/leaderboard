export default (data) => {
    const scores = document.querySelector('.score-display');
    const ul = scores.firstElementChild;
    data.forEach((info) => {
      ul.innerHTML += `<li>
      <p>${info.name} :</p>
      <p>${info.score}</p>
    </li>`;
    });
  };
  