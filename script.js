const movies = [
  { id: 1, title: 'Movie 1', genre: 'action' },
  { id: 2, title: 'Movie 2', genre: 'drama' },
  { id: 3, title: 'Movie 3', genre: 'action' },
  { id: 4, title: 'Movie 4', genre: 'comedy' }
];

const moviesListContainer = document.querySelector("#moviesList");
const genreListContainer = document.querySelector("#genreList");

const movieList = movies.map(movie => {
  const listItem = document.createElement('li');
  listItem.textContent = `${movie.title} - Genre: ${movie.genre}`;
  return listItem;
});

moviesListContainer.append(...movieList);

const genreListItems = movies.reduce((acc, movie) => {
  acc[movie.genre] ? acc[movie.genre].push(movie.title) : acc[movie.genre] = [movie.title];
  return acc;
}, {});


let genreListHTML = '';
for (const genre in genreListItems) {
  const moviesList = genreListItems[genre].map(title => `${title}`).join(', ');
  genreListHTML += `
    <li>
      <strong>Genre:</strong> ${genre}<br>
      <strong>Movies:</strong> ${moviesList}<br>
    </li>
    <hr>
  `;
}

genreListContainer.innerHTML = genreListHTML;
