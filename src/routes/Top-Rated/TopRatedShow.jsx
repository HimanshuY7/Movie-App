import React, { useEffect,useState } from 'react'
import { TopShowApi, options } from '../../constants/Api';
import Navbar from '../../components/Navbar/Navbar';
import RatedContent from '../../components/TopRatedContent/RatedContent';

const TopRatedShow = () => {
  const [topShowData , setTopShowData] = useState([]);

  const fetchTopShow = async() =>{
    const resp = await fetch(TopShowApi, options)
    .then(response=>response.json())
    .catch(err=> console.error(err));

    const Data = await resp;

    setTopShowData([Data]);
  }

  useEffect(()=>{
    fetchTopShow();
  },[])

  console.log(topShowData)

  return (
    
    <div>
      <Navbar/>
      <RatedContent Apidata={topShowData}/>
      
    </div>
  )
}

export default TopRatedShow