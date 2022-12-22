export const navigateToList = (item) => {
  if (item.id.includes("movie") && item.item === "Popular") {
    return "/movie/popular";
  }
  if (item.id.includes("movie") && item.item === "Now Playing") {
    return "/movie/now_playing";
  }
  if (item.id.includes("movie") && item.item === "Upcoming") {
    return "/movie/upcoming";
  }
  if (item.id.includes("movie") && item.item === "Top Rated") {
    return "/movie/top_rated";
  }
  if (item.id.includes("tv") && item.item === "Popular") {
    return "/tv/popular";
  }
  if (item.id.includes("tv") && item.item === "Airing Today") {
    return "/tv/airing_today";
  }
  if (item.id.includes("tv") && item.item === "On Tv") {
    return "/tv/on_the_air";
  }
  if (item.id.includes("tv") && item.item === "Top Rated") {
    return "/tv/top_rated";
  }
  if (item.id.includes("people") && item.item === "Popular") {
    return "/person/popular";
  }
};
