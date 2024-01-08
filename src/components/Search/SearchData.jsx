import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieDetailApi, options } from '../../constants/Api';
import { getMovieDetails } from '../../features/FetchLatestMovieListDetails/fetchSlice';
import { useNavigate } from 'react-router-dom';
import '../MovieList/Movielist.css'


const SearchData = () => {

    const searchdata = useSelector((state) => state.search.searchData);
  
    const genreList = useSelector((state) => state.genre.genreData)

    const dispatch= useDispatch();

    const navigate = useNavigate();


    //Fetching movie details from api, navigating to details route
    const handleClick = (id) => {
        fetch(`${MovieDetailApi}` + `${id}` + '?language=en-US', options)
            .then((res) => res.json()).then((data) => {

                let dataList = [data];

                dispatch(getMovieDetails(dataList))
            })
            .catch((err) => console.error(err));

        navigate(`/Details/:${id}`);
    }


    return (
        <>
            {searchdata.length != 0 && <h1>Search Results:</h1>}
            <div className='container'>
                {searchdata.length != 0 && searchdata.results.filter((item) => {
                    return item.backdrop_path != null
                }).map((data) => {

                    const genreIds = data.genre_ids || [];

                    const genre = genreIds.map((item) => {
                        return (
                            genreList[0]?.genres.filter((val) => {
                                return val.id === item;
                            }) || []
                        );
                    })

                    return <div key={data.id} className='Movie-card' onClick={() => handleClick(data.id)}>

                        {data.backdrop_path != null || data.backdrop_path != undefined}
                        <div className='card-img'>
                            <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
                        </div>

                        <div className='card-text'>
                            <div className='card-heading'>
                                <h3>{data.original_title}</h3>
                            </div>
                            <hr />
                            <div className='card-row1'>
                                <div className='card-row1-left'>
                                    <p className='card-date'>{data.release_date.substring(0, 4)}.</p>
                                    <p className='card-rating'>rating: {data.vote_average.toFixed(1)}/10</p>
                                </div>
                                <div className='card-row1-right'>
                                    <p className='card-media'>{data.media_type}</p>
                                </div>
                            </div>
                            <div className='card-genre'>
                                {genre && genre.length > 0 && genre[0].length > 0 && genre.map((val, index) => {
                                    return val.length > 0 && <p key={val[0].id}>
                                        {val[0].name}
                                        {index < genre.length - 1 && ' /'}
                                    </p>
                                })}
                            </div>
                        </div>

                    </div>
                })
                }
            </div>
        </>
    )
}

export default SearchData