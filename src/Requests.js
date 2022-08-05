const API_KEY ="bb35e2dcecc02217bdac6dc948860a74";
const Requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with-network=213`,
    fetchTopRated:`/movie/top-rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies:`/discover/movies?api_key=${API_KEY}&with-genres=28`,
    fetchComedyMovies:`/discover/movies?api_key=${API_KEY}&with-genres=35`,
    fetchHorrorMovies:`/discover/movies?api_key=${API_KEY}&with-genres=27`,
    fetchRomanceMovies:`/discover/movies?api_key=${API_KEY}&with-genres=10749`,
    fetchDocumentaries:`/discover/movies?api_key=${API_KEY}&with-genres=99`,
};
export default Requests;