import { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './routes/Home/Home'
import Movieveiw from './routes/Movie-Detailed-view/Movieveiw'
import Favourite from './routes/favourite-page/Favourite'
import './App.css'
const TopRatedMovies =lazy(()=> import('./routes/Top-Rated/TopRatedMovies'))
const TopRatedShow = lazy(()=> import('./routes/Top-Rated/TopRatedShow'))


function App() {

  return (
    <>
      <Router>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favourite' element={<Favourite/>}/>
            <Route path='/Details/:id' element={<Movieveiw/>}/>
            <Route path='/TopMovie' element={<Suspense fallback={<h1>Loading....</h1>}>
            <TopRatedMovies/>
            </Suspense>}/>
            <Route path='/TopSeries' element={<Suspense fallback={<h1>Loading..</h1>}>
              <TopRatedShow/>
            </Suspense>
          }/>
         </Routes>
      </Router>
    </>
  )
}

export default App
