import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './routes/Home/Home'
import Favourite from './routes/favourite-page/Favourite'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favourite' element={<Favourite/>}/>
         </Routes>
      </Router>
    </>
  )
}

export default App
