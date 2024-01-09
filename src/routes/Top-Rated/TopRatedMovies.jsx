
import Navbar from "../../components/Navbar/Navbar";
import RatedContent from "../../components/TopRatedContent/RatedContent";
import { TopMovieApi, options } from "../../constants/Api"
import { useEffect, useState } from "react";



const TopRatedMovies = () => {


    const [topMovieData,setTopMovieData] = useState([]);

    console.log(topMovieData);

    const fetchTopMovie = async () => {
        const resp = fetch(TopMovieApi, options)
            .then(response => response.json())
            .catch(err => console.error(err));

        const data = await resp;

        setTopMovieData([data]);
        
    }

    useEffect(()=>{
        fetchTopMovie();
    },[])

    return (
        <div>
            <Navbar/>
            <RatedContent Apidata={topMovieData}/>

        </div>
    )

}

export default TopRatedMovies