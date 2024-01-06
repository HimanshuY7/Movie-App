import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { GenreApi, LatestMovieApi, options } from '../../constants/Api'
import { useDispatch } from 'react-redux'
import { fetchMovieData } from '../../features/FetchLatestMovieListDetails/fetchSlice';
import Movielist from '../../components/MovieList/Movielist';
import { fetchGenreData } from '../../features/AllGenreData/genreSlice';

const Home = () => {

  const dispatch = useDispatch();

  const FetchMovieList = async () => {
    const promise = await fetch(`${LatestMovieApi}`, options)
      .then(response => response.json())
      .catch(err => console.error(err));

    const data = await promise;

    const datalist = [data]

    dispatch(fetchMovieData(datalist));
  }

  const getGenre = async ()=>{
    const promise1 = await fetch(`${GenreApi}`,options)
    .then(response => response.json())
      .catch(err => console.error(err));

    const genre = await promise1;

    const genrelist = [genre]

    dispatch(fetchGenreData(genrelist));
  }

  useEffect(() => {
    FetchMovieList();
    getGenre();
  }, [])

  return (
    <div>
      <Navbar />
      <Movielist />
    </div>
  )
}

export default Home