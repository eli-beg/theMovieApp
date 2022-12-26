export const convertUrlSectionToTitle = (item) => {
  if (item === "popular") {
    return "Popular";
  }
  if (item === "now_playing") {
    return "Now Playing";
  }
  if (item === "upcoming") {
    return "Upcoming";
  }
  if (item === "top_rated") {
    return "Top Rated";
  }

  if (item === "airing_today") {
    return "Airing Today";
  }
  if (item === "on_the_air") {
    return "On Tv";
  }
  if (item === "tv") {
    return "Similar tv shows";
  }
  if (item === "movie") {
    return "Similar Movies";
  }
};
