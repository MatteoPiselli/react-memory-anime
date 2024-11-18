export function getFilms(filmName) {
  return fetch('https://www.omdbapi.com/?apikey=e3ecc307&s=' + filmName, {
    type: 'GET',
  }).then((res) => res.json());
}
