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

const getDetailsSearch = async (category, query) => {
  const dataDetails = await axios.get(
    `https://api.themoviedb.org/3/${category}/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  return dataDetails;
};

const getTrailer = async (query, id) => {
  const dataTrailer = await axios.get(
    `https://api.themoviedb.org/3/${query}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return dataTrailer;
};

export {
  getBannerImage,
  getMovieSearch,
  getTvSearch,
  getPersonSearch,
  getTrailer,
  getDetailsSearch,
};
