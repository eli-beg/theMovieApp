import axios from "axios";

const getBannerImage = async () => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return data;
};

const getMovieSearch = async (query) => {
  const dataMovie = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return dataMovie;
};

const getTvSearch = async (query) => {
  const dataTv = await axios.get(
    `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return dataTv;
};

const getPersonSearch = async (query) => {
  const dataTv = await axios.get(
    `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return dataTv;
};

const getMovieDetailsSearch = async (query) => {
  const dataMovieDetails = await axios.get(
    `https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return dataMovieDetails;
};

const getTvDetailsSearch = async (query) => {
  const dataTvDetails = await axios.get(
    `https://api.themoviedb.org/3/tv/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  return dataTvDetails;
};

const getPersonDetailsSearch = async (query) => {
  const dataPersonDetails = await axios.get(
    `https://api.themoviedb.org/3/person/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  return dataPersonDetails;
};

export {
  getBannerImage,
  getMovieSearch,
  getTvSearch,
  getPersonSearch,
  getMovieDetailsSearch,
  getTvDetailsSearch,
  getPersonDetailsSearch,
};
