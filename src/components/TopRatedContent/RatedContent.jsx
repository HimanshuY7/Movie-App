import { useNavigate } from "react-router-dom";
import { MovieDetailApi, options } from "../../constants/Api";
import { getMovieDetails } from "../../features/FetchLatestMovieListDetails/fetchSlice";
import { useDispatch } from "react-redux";

const RatedContent = ({ Apidata }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleClick = (id) => {
        fetch(`${MovieDetailApi}` + `${id}` + '?language=en-US', options)
            .then((res) => res.json()).then((data) => {

                let dataList = [data];

                dispatch(getMovieDetails(dataList))
            })
            .catch((err) => console.error(err));

        navigate(`/Details/:${id}`);
    }

    return (
        <>
            <div className="container">
                {Apidata && Apidata.length != 0 && Apidata[0]?.results.map((data) => {

                    return <div key={data.id} className='Movie-card' onClick={() => handleClick(data.id)}>
                        <div className='card-img'>
                            <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
                        </div>

                        <div className='card-text'>
                            <div className='card-heading'>
                                <h3>{data.original_title}</h3>
                            </div>
                            <hr />
                            <div className='card-row1'>
                                <div className='card-row1-left'>
                                    <p className='card-rating'>rating: {data.vote_average.toFixed(1)}/10</p>
                                </div>
                                <div className='card-row1-right'>
                                    <p className='card-media'>{data.media_type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </>
    )
}

export default RatedContent;