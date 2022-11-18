import axios from "axios";

const getBannerImage = () => {
  const data = axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return data;
};

export default getBannerImage;
