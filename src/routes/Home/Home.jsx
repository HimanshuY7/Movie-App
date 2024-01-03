import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { LatestMovieApi, options } from '../../constants/Api'
import { useDispatch } from 'react-redux'
import { fetchMovieData } from '../../features/FetchLatestMovie/fetchSlice';
import Movielist from '../../components/MovieList/Movielist';

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

  useEffect(() => {
    FetchMovieList();
  }, [])

  return (
    <div>
      <Navbar />
      <Movielist />
    </div>
  )
}

export default Home