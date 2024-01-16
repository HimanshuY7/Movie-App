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
            <div className="flex flex-wrap">
                {Apidata && Apidata.length != 0 && Apidata[0]?.results.map((data) => {

                    return <div key={data.id} className='p-3 m-3 h-[410px] w-[275px] rounded-md shadow-md bg-black bg-opacity-50
                    hover:scale-105 transition-transform duration-300 
                    hover:border-4 hover:border-orange-500' onClick={() => handleClick(data.id,data.release_date                        )}>
                        <div className='w-[250px] h-[300px]'>
                            <img className="h-[290px] " src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
                        </div>

                        <div className=''>
                            <div className='text-white text-[20px] font-bold'>
                                {data.original_title ? (<h3>{data.title}</h3>) : (<h3>{data.name}</h3>)}
                            </div>
                            <hr/>
                            <div>
                               {data.release_date ? (<p className="text-white text-[14px] py-2 ">Released on :{data.release_date}</p>) 
                               : (<p className="text-white text-[14px] py-2">Released on:{data.first_air_date}</p>)}
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </>
    )
}

export default RatedContent;