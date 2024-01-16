import React from "react";
import { useSelector } from "react-redux";
import '../MovieList/Movielist.css'
import Card from "../MovieList/Card";


const SearchData = () => {

    const searchdata = useSelector((state) => state.search.searchData);

    return (
        <>  {searchdata.length!=0 && <h1 className='my-3 p-2 ml-[40px] text-4xl
        text-white font-bold shadow-md font-serif'>Search Results</h1>}
           <Card Apidata={searchdata}/>
        </>
    )
}

export default SearchData