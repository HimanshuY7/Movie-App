import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import './Movielist.css'
import { getMovieDetails } from '../../features/FetchLatestMovieListDetails/fetchSlice';
import { useNavigate } from 'react-router-dom';
import useMovieDetails from '../../utils/useMovieDetails';

const Card = ({Apidata}) => {

    const dispatch = useDispatch();

    console.log(Apidata)

    const navigate = useNavigate();

    const genreList = useSelector((state) => state.genre.genreData)

    const { fetchDetails } = useMovieDetails();

    //Fetching movie details from api, navigating to details route
    const handleClick = async (id) => {

        const data = await fetchDetails(id);

        dispatch(getMovieDetails([data]))


        navigate(`/Details/:${id}`);
    }


    return (
        <>
            <div className='flex flex-wrap px-2 ml-3'>
                {Apidata.length != 0 && Apidata[0].results.filter((item) => {
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

                    return <div key={data.id} className='m-3 p-3 h-[400px] w-[310px] bg-[#5a4661] bg-opacity-50
                    rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 
                    hover:border-4 hover:border-orange-500' onClick={() => handleClick(data.id)}>

                        <div className='ml-1 w-[280px]'>
                            <img className='w-full h-[200px] shadow-md' src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
                        </div>

                        <div className='shadow-md'>
                            <div className='text-white h-[70px] py-1 px-2 text-[18px] font-bold'>
                                <h3>{data.title}</h3>
                            </div>
                            <hr />

                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <p className='p-2 text-[14px] text-white'>{data.release_date} ⁃</p>
                                    <p className='px-2 mt-1 rounded-md font-bold bg-yellow-300 h-[30px]'>☆{data.vote_average.toFixed(1)}/10</p>
                                </div>
                                <div>
                                    <p className='px-2 mt-1 mr-1 bg-black text-white rounded-md'>{data.media_type}</p>
                                </div>
                            </div>
                            <div className='flex flex-wrap text-white mt-2'>
                                {genre && genre.length > 0 && genre[0].length > 0 && genre.map((val, index) => {
                                    return val.length > 0 && <p className='p-1' key={val[0].id}>
                                        {val[0].name}
                                        {index < genre.length - 1 && ' ,'}
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

export default Card