import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GenreApi, options } from '../../constants/Api';

const Movielist = () => {

  const movieData = useSelector((state) => state.latestMovie.latest);

  console.log(movieData)

  const getGenre = async(input) =>{
     const promise = await fetch(GenreApi,options)
     .then(response=> response.json())
     .catch(err=> console.error(err));

    const genreList =  promise.genres.filter((val)=>{
      return val.id === input;
    })

    return genreList.name;
  }

  // useEffect(()=>{
  //   getGenre(12);
  // })

  return (
    <div>
       {movieData.length!=0 && movieData[0].results.map((data)=>{
          return <div className='Movie-card'>
                <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />

                <div className='card-text'>
                       <h3>{data.original_title}</h3>
                       <p>Release Date: {data.release_date}</p>
                       <p>Overview: {data.overview}</p>
                       {data && data.genre_ids.map((item)=>{
                           const genreName= getGenre(item);
                           const list= [...list,genreName ]
                           return list;
                       }).map((value)=>{
                          return <><p>{value}</p></>
                       })}
                </div>

          </div>
       })}
    </div>
  )
}

export default Movielist