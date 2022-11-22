import axios from "axios";

const getBannerImage = () => {
  const data = axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return data;
};

const getMultiSearch = (query) => {
  const data = axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return data;
};

export { getBannerImage, getMultiSearch };
