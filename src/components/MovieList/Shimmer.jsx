import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Shimmer = () => {

    const num = [1, 2, 3, 4, 5, 6]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    let settings={}

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
        settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3
        };
    }
    else {
        settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2
        };
    }

    return (
        <>
            <div className="lg:h-[50px] lg:w-[230px] lg:ml-[50px] ml-[30px] h-[30px] shadow-md
             w-[150px] bg-gray-300 opacity-50 rounded-md "></div>
            <div className='px-4 mx-3'>
                <Slider {...settings}>
                    {num.map(() => {

                        return <div className='lg:h-[400px] lg:w-[210px] h-[300px] w-[150px] mx-4 p-3 bg-gray-200 bg-opacity-50
                    rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 
                    hover:border-4 hover:border-orange-500'>

                            <div className='ml-1 lg:w-[240px] lg:h-[250px] w-[170px] h-[200px] bg-gray-600'>

                            </div>

                            <div >
                                <div className='lg:h-[30px] lg:w-[150px] lg:ml-[10px] ml-[5px] h-[20px] w-[100px] py-1 my-2 px-2 bg-gray-600'>
                                </div>

                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <p className='lg:p-2 lg:w-[100px] lg:ml-[10px] lg:py-2 w-[50px] ml-[5px] p-1 bg-gray-600'></p>
                                        {/* <p className='px-2 mt-1 rounded-md font-bold bg-yellow-300 h-[30px]'>☆{data.vote_average.toFixed(1)}/10</p> */}
                                    </div>
                                    <div>
                                        <p className='lg:px-2 px-1 mt-1 mr-1 bg-gray-700 rounded-md'></p>
                                    </div>
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

export default Shimmer