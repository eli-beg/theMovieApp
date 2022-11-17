import axios from "axios";


const getBannerImage = () =>{
    const data = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    return data
};

export default getBannerImage;