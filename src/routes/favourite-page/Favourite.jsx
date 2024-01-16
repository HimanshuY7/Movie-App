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

      {Favourites.length != 0 && <h1 className='text-white p-3 m-2 text-[22px]'>Favourite's</h1>}
      {<div className='flex flex-wrap ml-[20px]'>
      {Favourites.length != 0 ? (Favourites.map((data) => {
        return <div key={data[0].id}>
          <div className='p-2 m-2 w-[220px] rounded-md shadow-md bg-black hover:scale-105 transition-transform duration-300 
                    hover:border-4 hover:border-orange-500'>
            <img className='p-2 h-[300px] w-[200px]' src={`https://image.tmdb.org/t/p/w500/${data[0]?.poster_path}`} />
            {data[0].title ? <p className='ml-[30px] text-white text-[14px] font-bold h-[40px]'>{data[0].title}</p>
            : <p className='ml-[30px] text-white text-[14px] font-bold h-[40px]'>{data[0].name}</p>}
          </div>
          <button className='px-[5rem] py-1 ml-[9px] bg-gray-600 rounded-sm hover:bg-gray-800 hover:text-white'
           onClick={()=>RemoveFavour(data[0]?.id)}>Remove</button>
          </div>
       
      }))
    :
      (<h1 className='text-white p-2 m-3 text-[20px]'>Your favourite List is empty</h1>)}
      </div>}
    </>
  )

}

export default Favourite