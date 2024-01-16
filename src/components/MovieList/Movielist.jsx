import React from 'react'
import { useSelector } from 'react-redux'
import './Movielist.css'
import Card from './Card';

const Movielist = () => {


  const movieData = useSelector((state) => state.latestMovie.latest);

  return (
    <div className='my-[50px]'>
    {movieData.length!=0 && <h1 className='my-3 p-2 ml-[40px] text-4xl
     text-white font-bold shadow-md font-serif'>Latest Movies</h1>}
     <Card Apidata={movieData}/>
    </div>
  )
}

export default Movielist