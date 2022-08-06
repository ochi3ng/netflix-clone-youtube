const API_KEY ="bb35e2dcecc02217bdac6dc948860a74";
const Requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with-network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with-genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with-genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with-genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with-genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with-genres=99`,
};
export default Requests;