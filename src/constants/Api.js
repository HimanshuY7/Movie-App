 export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWZkZmU5YTgwZjljMmIyMzU4OTdhMDAwM2JmZTlmZSIsInN1YiI6IjY1MWY5NzM1ZWE4NGM3MDBjYTBhY2IzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QcmyZ-HBudlQuJSYBatnotWqQAtlD-Ear1L6PSW41Xw'
    }
  };


  export const LatestMovieApi= 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  export const MovieDetailApi = 'https://api.themoviedb.org/3/movie/';

  export const ShowDetailApi = 'https://api.themoviedb.org/3/tv/'

  export const GenreApi = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

  export const SearchApi = 'https://api.themoviedb.org/3/search/movie'

  export const TopShowApi = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'

  export const TopMovieApi = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

  export const MovieByGenreApi = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres='
