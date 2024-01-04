 export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWZkZmU5YTgwZjljMmIyMzU4OTdhMDAwM2JmZTlmZSIsInN1YiI6IjY1MWY5NzM1ZWE4NGM3MDBjYTBhY2IzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QcmyZ-HBudlQuJSYBatnotWqQAtlD-Ear1L6PSW41Xw'
    }
  };


  export const LatestMovieApi= 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  export const MovieDetailApi = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';

  export const GenreApi = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
