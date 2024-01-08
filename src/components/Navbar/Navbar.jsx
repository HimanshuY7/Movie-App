import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
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

        dispatch(setSearchData(data));

    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <ul className='nav-menu d-flex'>
                        <li>
                            <a className="navbar-brand">WatchMovies</a>
                        </li>

                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/favourite'>Favourite</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <input className="form-control me-2" value={searchResult} type="search" placeholder="Search" onChange={handleSearch} aria-label="Search" />
                        <button className="btn btn-outline-success" onClick={fetchSearchData}>Search</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar