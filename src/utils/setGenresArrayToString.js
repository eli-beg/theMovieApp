export const setGenresArrayToString = (genres) => {
  const genresArray = [];
  genres.map((genre) => genresArray.push(genre.name));
  const genresString = genresArray.toString().replaceAll(",", ", ");
  return genresString;
};
