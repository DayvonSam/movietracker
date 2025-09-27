const form = document.getElementById("movieForm");
const movieList = document.getElementById("movieList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const description = document.getElementById("description").value;

  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");
  movieCard.innerHTML = `
    <h3>${title} (${year})</h3>
    <p>${description}</p>
  `;

  movieList.appendChild(movieCard);

  form.reset();
});
