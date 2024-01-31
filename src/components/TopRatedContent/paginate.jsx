import { useContext } from "react";
import { pageContext } from "../../routes/Top-Rated/TopRatedMovies";
import { pageShowContext } from "../../routes/Top-Rated/TopRatedShow";


const Paginate = ({Apidata ,type}) =>{

    const { setPage } = useContext(type === 'movie' ? pageContext : pageShowContext);

    const pageList= []

    for(let i = 1; i<= Math.ceil(Apidata[0]?.results.length/10); i++){
        pageList.push(i);
    }

    const handleClick = (val) =>{
        setPage(val)
    }

    return (
       <>
        <div className="p-3 m-3 lg:ml-[700px] ml-[200px]">
         {
            pageList.length!=0 && pageList.map((val,index)=>{
               return <button className="lg:h-[50px]  bg-gray-300 lg:w-[50px] px-2 mx-2 hover:bg-gray-800 hover:text-white rounded-sm shadow-md" key={index} onClick={()=>handleClick(val)}>{val}</button>
            }
            
           )
         }
         </div>
       </>
    )
}

export default Paginate