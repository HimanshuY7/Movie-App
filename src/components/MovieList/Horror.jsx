import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getMovieDetails } from '../../features/FetchLatestMovieListDetails/fetchSlice';
import { useNavigate } from 'react-router-dom';
import useMovieDetails from '../../utils/useMovieDetails';

const Horror = ({Apidata}) => {

    const dispatch = useDispatch();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    console.log(Apidata)

    const navigate = useNavigate();

    const { fetchDetails } = useMovieDetails();

    let setting = {};

    const genreList = useSelector((state) => state.genre.genreData)


    //Fetching movie details from api, navigating to details route
    const handleClick = async (id) => {

        const data = await fetchDetails(id);

        dispatch(getMovieDetails([data]))


        navigate(`/Details/:${id}`);
    }

    
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
    }, []);

    if (windowWidth > 1040) {
        setting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3
        };
    }
    else {
        setting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2
        };
    }

    return (
        <>
            <div className='px-4 mx-3'>
            <Slider {...setting}>
                {Apidata.length != 0 && Apidata.results.filter((item) => {
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

                    return  <div key={data.id} className='lg:h-[400px] lg:w-[210px] h-[300px] w-[150px] bg-[#5a4661] bg-opacity-50
                    rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 
                    hover:border-4 hover:border-orange-500' 
                    onClick={() => handleClick(data.id)}>

                        <div className='ml-1 w-[280px]'>
                            <img className='lg:w-[240px] lg:h-[200px] lg:mt-0 mt-[10px] w-[185px] h-[150px] shadow-md' src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
                        </div>

                        <div >
                            <div className='text-white lg:h-[70px] lg:text-[18px] h-[20px] text-[14px] py-1 px-2 font-bold'>
                                <h3>{data.title}</h3>
                            </div>
                            <hr className='lg:mt-0 mt-2'/>

                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <p className='lg:p-2 lg:text-[14px] text-[12px] p-1 text-white'>{data.release_date} ⁃</p>
                                    {/* <p className='px-2 mt-1 rounded-md font-bold bg-yellow-300 h-[30px]'>☆{data.vote_average.toFixed(1)}/10</p> */}
                                </div>
                                <div>
                                    <p className='lg:px-2 lg:text-[16px] text-[12px] px-1 mt-1 mr-1 bg-black text-white rounded-md'>movie</p>
                                </div>
                            </div>
                            <div className='flex flex-wrap lg:text-[16px] text-[12px] text-white mt-2'>
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
                </Slider>
            </div>
        </>
    )
}

export default Horror