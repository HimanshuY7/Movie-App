import React, { useState,useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchData } from '../../features/FetchLatestMovieListDetails/searchSlice'
import { SearchApi, options } from "../../constants/Api";
import './Navbar.css'


const Navbar = () => {

    const [searchResult, setResult] = useState("");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const location = useLocation();

    const dispatch = useDispatch();

    const isHomePage = location.pathname === '/';

    const handleSearch = (e) => {
        setResult(e.target.value);

    }

    //fetching search data from api
    const fetchSearchData = async () => {
        const response = await fetch(`${SearchApi}?query=${searchResult}&include_adult=false&language=en-US&page=1`, options)
            .then(resp => resp.json())
            .catch(err => console.error(err));

        const data = await response;

        dispatch(setSearchData([data]));

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav>
                <div className="flex justify-between items-center p-2 bg-[#E3D9D7] w-full">

                    <h2 className='text-[24px] font-bold'>WatchMovies</h2>

                    <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </div>

                    <div className={`${isHomePage ? 'mr-0' : 'mr-[270px]'} lg:hidden lg:py-0 lg:space-y-0`}>
                        <ul className={`${isMenuOpen ? 'block' : 'hidden'}  text-white bg-gray-800 opacity-95 absolute lg:py-0 lg:space-y-0 py-2 space-y-2`}>
                            <li className='mt-2 px-1 hover:text-orange-400 hover:text-[17px]'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='mt-2 px-1 hover:text-orange-400 hover:text-[17px]'>
                                <Link to='/favourite'>Favourite</Link>
                            </li>
                            <li className='mt-2 px-1 hover:text-orange-400 hover:text-[17px]'>
                                <Link to='/TopMovie'>Top-Rated Movies</Link>
                            </li>
                            <li className='mt-2 px-1 hover:text-orange-400 hover:text-[17px]'>
                                <Link to='/TopSeries'>Top-Rated TV</Link>
                            </li>
                        </ul>
                    </div>


                   {windowWidth > 1040 && <ul className={`${isHomePage ? 'mr-[500px]' : 'mr-[930px]' } flex py-5 space-x-4`}>
                        <li className='mt-2 hover:text-orange-400 hover:text-[17px]'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='mt-2 hover:text-orange-400 hover:text-[17px]'>
                            <Link to='/favourite'>Favourite</Link>
                        </li>
                        <li className='mt-2 hover:text-orange-400 hover:text-[17px]'>
                            <Link to='/TopMovie'>Top-Rated Movies</Link>
                        </li>
                        <li className='mt-2 hover:text-orange-400 hover:text-[17px]'>
                            <Link to='/TopSeries'>Top-Rated TV</Link>
                        </li>
                    </ul>}

                    {isHomePage && <div className="flex items-center mr-[20px]">
                        <input className="lg:w-[300px] w-[150px] shadow-md mx-1 px-2" value={searchResult} type="search" placeholder="Search" onChange={handleSearch} aria-label="Search" />
                        <button className="lg:w-[80px] lg:text-[16px] lg:px-2 lg:py-0
                         text-[12px] w-[60px] px-2 py-1 shadow-md bg-white hover:bg-green-400 rounded-sm
                         hover:text-white" onClick={fetchSearchData}>Search</button>
                    </div>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar