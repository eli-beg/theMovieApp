import axios from "axios";

const getListItems = async (item, section) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/${item}/${section}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  return data;
};

export { getListItems };
