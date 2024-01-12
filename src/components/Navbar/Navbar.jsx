import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchData } from '../../features/FetchLatestMovieListDetails/searchSlice'
import { SearchApi, options } from "../../constants/Api";


const Navbar = () => {

    const [searchResult, setResult] = useState("")

    const dispatch = useDispatch()

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

    return (
        <div>
            <nav>
                <div className="flex justify-between items-center p-2 bg-[#E3D9D7] w-full">
                    <ul className='flex py-5 space-x-4'>
                        <li className='mt-1'>
                            <a className="text-2xl">WatchMovies</a>
                        </li>

                        <li className='mt-2'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='mt-2'>
                            <Link to='/favourite'>Favourite</Link>
                        </li>
                        <li className='mt-2'>
                            <Link to='/TopMovie'>Top-Rated Movies</Link>
                        </li>
                        <li className='mt-2'>
                            <Link to='/TopSeries'>Top-Rated TV</Link>
                        </li>
                    </ul>
                    <div className="flex items-center mr-[20px]">
                        <input className="shadow-md mx-1 px-2" value={searchResult} type="search" placeholder="Search" onChange={handleSearch} aria-label="Search" />
                        <button className=" px-2 shadow-md bg-white hover:bg-green-400 rounded-sm
                         hover:text-white" onClick={fetchSearchData}>Search</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar