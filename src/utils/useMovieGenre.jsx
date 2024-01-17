import React from 'react'
import { MovieByGenreApi, options } from '../constants/Api';

const useMovieGenre = async (genre) => {
    const response = await fetch(`${MovieByGenreApi}${genre}`, options)
    .catch((err) => console.error(err));

    const data = await response.json();

    return data;

}

export default useMovieGenre;