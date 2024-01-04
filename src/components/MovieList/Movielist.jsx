import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GenreApi, options } from '../../constants/Api';

const Movielist = () => {


  const movieData = useSelector((state) => state.latestMovie.latest);

  const genreList = useSelector((state)=> state.genre.genreData)

  console.log(genreList)


  return (
    <div>
      {movieData.length != 0 && movieData[0].results.map((data, id) => {
      
       const genre = data.genre_ids.map((item)=>{
          return (
             genreList[0].genres.filter((val)=>{
                return val.id === item; 
          }))
       })

        return <div key={id} className='Movie-card'>
          <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />

          <div className='card-text'>
            <h3>{data.original_title}</h3>
            <p>Release Date: {data.release_date}</p>
            <p>Overview: {data.overview}</p>
            {genre.map((val)=>{
               return <p>{val[0].name}</p>
            })}
          </div>

        </div>
      })
      }
    </div>
  )
}

export default Movielist