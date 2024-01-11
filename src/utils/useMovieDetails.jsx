import { MovieDetailApi, options } from "../constants/Api";


import React from 'react'

const useMovieDetails = () => {


    const fetchDetails = async (id) => {
        const response = await fetch(`${MovieDetailApi}` + `${id}` + '?language=en-US', options)
            .catch((err) => console.error(err));
    
        const data= await response.json();          
            
            return data;
    }

    return {fetchDetails};

}

export default useMovieDetails