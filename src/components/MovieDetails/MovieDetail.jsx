import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFavourite } from '../../features/FavouritePageRelatedQuery/favouriteSlice';
import { useNavigate } from 'react-router-dom';


const MovieDetail = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const movieDetails = useSelector((state) => state.latestMovie.movieDetail);

    const favouriteList = useSelector((state) => state.favourite.favour);

    const overview = movieDetails[0]?.overview;

    const IdList = favouriteList.map((val) => {
        return val[0]?.id;
    })

    const AddFavour = (id) => {
        if (IdList.includes(id) == false) {
            const newList = [...favouriteList, movieDetails]
            dispatch(updateFavourite(newList));
        }
    }

    const RemoveFavour = (id) => {
        const newList = favouriteList.filter((item) => {
            return item[0]?.id != id;
        })
        dispatch(updateFavourite(newList));
    }


    // Function to limit the number of words in a string
    const limitWords = (text, limit) => {
        if (text) {
            const words = text.split(' ');
            const truncatedText = words.slice(0, limit).join(' ');
            return truncatedText;
        }
        return '';
    };

    const limitedOverview = limitWords(overview, 50);

    useEffect(() => {
        if (movieDetails.length == 0) {
            navigate('/')
        }
    })

    useEffect(() => {
        // Update window width when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Remove event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <>
            {movieDetails.length != 0 && <div className='flex w-full h-full'>

                <div className='bg-black lg:mt-[50px] lg:ml-[50px] lg:w-[700px] lg:h-[500px]
                  w-[500px] h-[600px] absolute rounded-md flex p-2 z-0'>
                    <div className='lg:h-[500px] h-[400px] lg:mt-0 mt-[10px]'>
                        <img className='lg:h-[350px] lg:w-[250px] w-[180px] h-[230px] p-3' src={`https://image.tmdb.org/t/p/w500/${movieDetails[0]?.poster_path}`} />
                        
                        {windowWidth <= 1040 && <div className='w-[200px]'>
                            <div>
                                <h1 className='p-2 text-[16px] font-bold text-white'>Release Date</h1>
                                {movieDetails[0].release_date ? (<p className='pl-3 text-white'>{movieDetails[0]?.release_date}</p>)
                                    : (<p className='pl-3 text-white'>{movieDetails[0]?.first_air_date}</p>)}
                            </div>
                            <div>
                                <h1 className='p-2 text-[16px] font-bold text-white'>Rating</h1>
                                <p className='pl-3 text-white'>☆{movieDetails[0].vote_average.toFixed(1)}/10</p>
                            </div>
                        </div>}

                        {
                            IdList.includes(movieDetails[0]?.id) == false ? (<button className='bg-gray-600 rounded-sm p-2 lg:ml-[40px] lg:mt-[30px] mt-[15px] hover:bg-gray-800 hover:text-white' onClick={() => AddFavour(movieDetails[0]?.id)}>Add To favourite</button>)
                                : (<button className='bg-gray-600 rounded-sm p-2 lg:ml-[40px] lg:mt-[30px] mt-[15px] hover:bg-gray-800 hover:text-white' onClick={() => RemoveFavour(movieDetails[0]?.id)}>Remove favourite</button>)
                        }
                    </div>

                    <div className=' lg:w-[500px] w-[280px] p-2 lg:mt-[20px] lg:ml-[300px] ml-[180px] absolute lg:z-2 z-[-1]'>
                        {movieDetails[0].title ? (<h1 className='text-white font-bold lg:text-[24px] text-[18px] p-2'>{movieDetails[0]?.title}</h1>)
                            : (<h1 className='text-white font-bold text-[24px] p-2'>{movieDetails[0]?.name}</h1>)}
                        <hr />
                        <p className='text-white lg:text-[20px] text-[15px] font-sans px-2'>
                            {limitedOverview} {overview.length > 200 ? '...' : ''}
                        </p>

                       <div className='flex'>{movieDetails[0]?.genres.map((data, index) => {
                            return <p className='py-2 px-1 lg:text-[18px] lg:mt-0 mt-[50px] text-[14px] text-yellow-300 font-bold italic' key={data.id}>
                                {data.name}
                                {index < movieDetails[0]?.genres.length - 1 && ' ,'}
                            </p>
                        })}</div>

                        <div className='flex flex-wrap'>{movieDetails[0]?.production_companies.map((data, index) => {
                            return <p className='py-2 px-1 lg:text-[15px] text-[12px] text-white' key={data.id}>
                                {data.name}
                                {index < movieDetails[0]?.production_companies.length - 1 && ' ,'}
                            </p>
                        })}</div>

                       {windowWidth > 1040 && <div className='flex justify-between w-[300px]'>
                            <div>
                                <h1 className='p-2 text-[22px] font-bold text-white'>Release Date</h1>
                                {movieDetails[0].release_date ? (<p className='pl-3 text-white'>{movieDetails[0]?.release_date}</p>)
                                    : (<p className='pl-3 text-white'>{movieDetails[0]?.first_air_date}</p>)}
                            </div>
                            <div>
                                <h1 className='p-2 text-[22px] font-bold text-white'>Rating</h1>
                                <p className='pl-3 text-white'>☆{movieDetails[0].vote_average.toFixed(1)}/10</p>
                            </div>
                        </div>}

                    </div>

                </div>

               {windowWidth > 1040 && <div className='ml-[700px] mt-[50px] bg-cover h-[500px] w-[700px] rounded-md shadow-md' style={
                    {
                        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%),
                    url(https://image.tmdb.org/t/p/w500/${movieDetails[0]?.backdrop_path})`
                    }
                }>

                </div>}


            </div>}

        </>
    )
}

export default MovieDetail


