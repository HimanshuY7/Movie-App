import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Movielist.css'
import Card from './Card';
import Comedy from './Comedy';
import Horror from './Horror';
import { MovieByGenreApi, options } from '../../constants/Api';

const Movielist = () => {

  const [horror, setHorror] = useState([]);

  const [crime , setCrime] = useState([]);

  const movieData = useSelector((state) => state.latestMovie.latest);

  const fetchDataByGenre = async(genre) =>{
    const response = await fetch(`${MovieByGenreApi}`+ genre, options)
    .catch((err) => console.error(err));

    const data = await response.json();

    if(genre==="27"){
      setHorror(data);
    }
    else{
      setCrime(data);
    }
  }

  useEffect(()=>{
    fetchDataByGenre("27");
    fetchDataByGenre("80");
  },[])


  return (
   <>
    <div className='lg:my-[50px] my-[20px]'>
      {movieData.length != 0 && <h1 className='lg:my-3 p-2 lg:ml-[40px] lg:text-4xl text-[20px] ml-[20px] my-1
     text-white font-bold shadow-md font-serif'>Latest Movies</h1>}
      <Card Apidata={movieData} />
    </div>
    <div className='lg:my-[50px] my-[20px]'>
      <h1 className='lg:my-3 p-2 lg:ml-[40px] lg:text-4xl text-[20px] ml-[20px] my-1
     text-white font-bold shadow-md font-serif'>Horror</h1>
      {horror.length!= 0 && <Horror Apidata={horror}/>}
    </div>
    <div className='lg:my-[50px] my-[20px]'>
      <h1 className='lg:my-3 p-2 lg:ml-[40px] lg:text-4xl text-[20px] ml-[20px] my-1
     text-white font-bold shadow-md font-serif'>Comedy</h1>
      <Comedy Apidata={movieData}/>
    </div>
    <div className='lg:my-[50px] my-[20px]'>
      <h1 className='lg:my-3 p-2 lg:ml-[40px] lg:text-4xl text-[20px] ml-[20px] my-1
     text-white font-bold shadow-md font-serif'>Crime</h1>
      {crime.length!=0 && <Horror Apidata={crime}/>}
    </div>
    </>
  )
}

export default Movielist