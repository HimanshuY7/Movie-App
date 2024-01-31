
import Navbar from "../../components/Navbar/Navbar";
import RatedContent from "../../components/TopRatedContent/RatedContent";
import Paginate from "../../components/TopRatedContent/paginate";
import { TopMovieApi, options } from "../../constants/Api"
import { createContext, useEffect, useState } from "react";


export const pageContext = createContext();

const TopRatedMovies = () => {


    const [topMovieData, setTopMovieData] = useState([]);

    const [page, setPage] = useState(1)

    console.log(topMovieData);

    const fetchTopMovie = async () => {
        const resp = fetch(TopMovieApi, options)
            .then(response => response.json())
            .catch(err => console.error(err));

        const data = await resp;

        setTopMovieData([data]);

    }

    const LastIndex = page * 10
    const StartIndex = LastIndex - 10

    useEffect(() => {
        fetchTopMovie();
    }, [])

    return (
        <div>
            <pageContext.Provider value={{ setPage }}>
                <Navbar />
                <RatedContent Apidata={topMovieData} start={StartIndex} end={LastIndex} />
                <Paginate Apidata={topMovieData} type={"movie"}/>
            </pageContext.Provider>
        </div>
    )

}

export default TopRatedMovies