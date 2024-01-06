import React from 'react'
import { useSelector } from 'react-redux'
import './MovieDetail.css'

const MovieDetail = () => {


    const movieDetails = useSelector((state) => state.latestMovie.movieDetail);

    console.log(movieDetails);

    return (
        <>
            {movieDetails.length != 0 && <div className='Detail-container'>
                <div className='Detail-left'>

                    <img className='Detail-img' src={`https://image.tmdb.org/t/p/w500/${movieDetails[0]?.poster_path}`} />
                    <br />
                    <button className='Detail-btn'>Add to favourite</button>
                </div>

                <div className='Detail-Right'>

                    <div className='Detail-Back' style={
                        {
                            backgroundImage: ` radial-gradient(circle at center, transparent 0%, transparent 20%, rgba(0, 0, 0, 1) 100%),
                        linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                        linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2)), 
                        url(https://image.tmdb.org/t/p/w500/${movieDetails[0]?.backdrop_path})`
                        }
                    }>
                    </div>

                    <div className='Detail-Text'>
                        <h3 className='Det-Heading'>{movieDetails[0]?.title}</h3>
                        <p className='Detail-date'>Release date: {movieDetails[0]?.release_date}</p>
                        <div className='Detail-genre'>{movieDetails[0]?.genres.map((data, index) => {
                            return <p className='genre' key={data.id}>
                                {data.name}
                                {index < movieDetails[0]?.genres.length - 1 && ' /'}
                            </p>
                        })}</div>

                        <p className='Det-overview'>{movieDetails[0]?.overview}</p>

                        <div className='Det-Prod'>Production : {movieDetails[0]?.production_companies.map((data,index)=>{
                            return <p className='production' key={data.id}>
                                {data.name}
                                {index < movieDetails[0]?.production_companies.length - 1 && ' ,'}
                            </p>
                        })}</div>

                        <p className='det-rate'>Rating: {movieDetails[0].vote_average.toFixed(1)}/10</p>

                    </div>


                </div>

            </div>}
        </>
    )
}

export default MovieDetail