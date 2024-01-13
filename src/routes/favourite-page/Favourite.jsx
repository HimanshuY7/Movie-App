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

      {Favourites.length != 0 && Favourites.map((data) => {
        return <div key={data[0].id} className='flex flex-wrap'>
          <div className='p-2 m-2 rounded-md shadow-md bg-black hover:scale-105 transition-transform duration-300 
                    hover:border-4 hover:border-orange-500'>
            <img className='p-2 h-[300px] w-[200px]' src={`https://image.tmdb.org/t/p/w500/${data[0]?.poster_path}`} />
            <p className='ml-[30px] text-white text-[18px] font-bold'>{data[0].title}</p>
          </div>
          <button className='' onClick={()=>RemoveFavour(data[0]?.id)}>Remove</button>
        </div>
      })}
    </>
  )

}

export default Favourite