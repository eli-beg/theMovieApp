import axios from "axios";

const getTopRatedMovies = async () => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  return data;
};

const getUpcomingMovies = async () => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  return data;
};

const getSimilarMovies = async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  return data;
};

export { getTopRatedMovies, getUpcomingMovies, getSimilarMovies };
