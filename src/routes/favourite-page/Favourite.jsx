import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import { updateFavourite } from '../../features/FavouritePageRelatedQuery/favouriteSlice';

const Favourite = () => {

  const dispatch = useDispatch();

  const Favourites = useSelector((state) => state.favourite.favour);

  console.log(Favourites);

  const RemoveFavour = (id) =>{
    const newList = Favourites.filter((item)=>{
        return item[0]?.id!= id;
    })
    dispatch(updateFavourite(newList));
}

  return (

    <>
      <Navbar />

      {Favourites.length != 0 && <h1 className='text-white p-3 m-2 lg:text-[22px] text-[20px] lg:ml-0 ml-[50px]'>Favourite's</h1>}
      {<div className='flex flex-wrap lg:ml-[20px] ml-[50px]'>
      {Favourites.length != 0 ? (Favourites.map((data) => {
        return <div key={data[0].id}>
          <div className='p-2 m-2 lg:w-[220px] lg:h-[360px] h-[280px] w-[170px] rounded-md shadow-md bg-black hover:scale-105 transition-transform duration-300 
                    hover:border-4 hover:border-orange-500'>
            <img className='p-2 lg:h-[300px] lg:w-[200px] h-200px w-150px' src={`https://image.tmdb.org/t/p/w500/${data[0]?.poster_path}`} />
            {data[0].title ? <p className=' text-white lg:text-[14px] w-full text-[12px] font-bold h-[40px]'>{data[0].title}</p>
            : <p className='ml-[30px] text-white lg:text-[14px] text-[12px] font-bold h-[40px]'>{data[0].name}</p>}
          </div>
          <button className='lg:px-[5rem] px-[3.5rem] lg:py-1 ml-[9px] bg-gray-600 rounded-sm hover:bg-gray-800 hover:text-white'
           onClick={()=>RemoveFavour(data[0]?.id)}>Remove</button>
          </div>
       
      }))
    :
      (<h1 className='text-white p-2 m-3 lg:text-[20px] text-[22px]'>Your favourite List is empty</h1>)}
      </div>}
    </>
  )

}

export default Favourite