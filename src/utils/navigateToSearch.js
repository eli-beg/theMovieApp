export const navigateToSearch = (name) => {
  if (name === "Movies") {
    return "/search/movie/";
  }
  if (name === "Tv" || name === "Person") {
    return `/search/${name.toLowerCase()}/`;
  }
};
