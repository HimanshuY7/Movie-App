import { useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../features/FetchLatestMovieListDetails/fetchSlice";
import { useDispatch } from "react-redux";
import useMovieDetails from "../../utils/useMovieDetails";
import useShowDetails from "../../utils/useShowDetails";

const RatedContent = ({ Apidata }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { fetchDetails} = useMovieDetails();

    const {fetchShow} = useShowDetails();

    //Fetching movie details from api, navigating to details route
    const handleClick = async (id,date) => {
  
        if(date){
             const data = await fetchDetails(id);
             dispatch(getMovieDetails([data]))
        }
        else{
            const data = await fetchShow(id);
            dispatch(getMovieDetails([data]))
        }
  
      navigate(`/Details/:${id}`);
    }

    return (
        <>
            <div className="container">
                {Apidata && Apidata.length != 0 && Apidata[0]?.results.map((data) => {

                    return <div key={data.id} className='Movie-card' onClick={() => handleClick(data.id,data.release_date                        )}>
                        <div className='card-img'>
                            <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
                        </div>

                        <div className='card-text'>
                            <div className='card-heading'>
                                {data.original_title ? (<h3>{data.title}</h3>) : (<h3>{data.name}</h3>)}
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