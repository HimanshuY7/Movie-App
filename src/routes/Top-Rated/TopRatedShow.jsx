import React, { createContext, useEffect, useState } from 'react'
import { TopShowApi, options } from '../../constants/Api';
import Navbar from '../../components/Navbar/Navbar';
import RatedContent from '../../components/TopRatedContent/RatedContent';
import Paginate from '../../components/TopRatedContent/paginate';

export const pageShowContext = createContext();

const TopRatedShow = () => {

  const [topShowData, setTopShowData] = useState([]);

  const [page, setPage] = useState(1)

  const fetchTopShow = async () => {
    const resp = await fetch(TopShowApi, options)
      .then(response => response.json())
      .catch(err => console.error(err));

    const Data = await resp;

    setTopShowData([Data]);
  }

  useEffect(() => {
    fetchTopShow();
  }, [])

  console.log(topShowData)

  const LastIndex = page * 10
  const StartIndex = LastIndex - 10

  return (

    <div>
      <pageShowContext.Provider value={{ setPage }}>
        <Navbar />
        <RatedContent Apidata={topShowData} start={StartIndex} end={LastIndex} />
        <Paginate Apidata={topShowData}  type={"show"}/>
      </pageShowContext.Provider>
    </div>
  )
}

export default TopRatedShow