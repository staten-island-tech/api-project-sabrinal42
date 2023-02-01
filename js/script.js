const apiKey = "17947fb8camshf7140918c46c720p15405ajsn2b1d36280dd7";
const apiHost = "imdb-top-100-movies.p.rapidapi.com";

const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const movieRankInput = document.getElementById("movieRank");
const movieContainer = document.getElementById("movieContainer");

searchButton.addEventListener("click", function () {
  const movieRank = movieRankInput.value;
  fetch(`https://imdb-top-100-movies.p.rapidapi.com/?rank=${movieRank}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
  })
    .then((response) => response.json())
    .then((movies) => {
      const movie = movies.find((movie) => movie.rank === parseInt(movieRank));
      if (!movie) {
        movieContainer.innerHTML = "<p>Movie not found</p>";
        return;
      }
      const movieCard = `
				<div class="movie-card">
					<h2>${movie.title}</h2>
					<img src="${movie.image}" alt="${movie.title} poster">
					<p>Rank: ${movie.rank}</p>
				</div>
			`;
      movieContainer.innerHTML = movieCard;
    })
    .catch((error) => console.error(error));
});

clearButton.addEventListener("click", function () {
  movieContainer.innerHTML = "";
});
