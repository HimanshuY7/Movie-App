import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <ul className='d-flex'>
                        <li>
                            <a className="navbar-brand">Navbar</a>
                        </li>

                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/favourite'>Favourite</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar