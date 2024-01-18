import React from "react";
import { useSelector } from "react-redux";
import '../MovieList/Movielist.css'
import Card from "../MovieList/Card";


const SearchData = () => {

    const searchdata = useSelector((state) => state.search.searchData);

    return (
        <>  {searchdata.length!=0 && <h1 className='lg:my-3 p-2 lg:ml-[40px] lg:text-4xl text-[20px] ml-[20px] my-1
        text-white font-bold shadow-md font-serif'>Search Results</h1>}
           <Card Apidata={searchdata}/>
        </>
    )
}

export default SearchData