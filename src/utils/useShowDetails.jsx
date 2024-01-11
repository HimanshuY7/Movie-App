import { ShowDetailApi, options } from "../constants/Api";

const useShowDetails = ()=>{

    const fetchShow = async(id)=>{
        const resp = await fetch(`${ShowDetailApi}${id}?language=en-US`,options)
        .then(res => res.json())
        .catch(err => console.error(err))

        const data = await resp;

        return data;
    }

    return {fetchShow};
}

export default useShowDetails;