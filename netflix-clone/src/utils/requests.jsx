const API_KEY = process.env.VITE_API_KEY;
const requests = {
fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
};

export default requests;
