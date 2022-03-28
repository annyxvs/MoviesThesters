import { Route , Routes} from 'react-router-dom'
import React from 'react';
import Home from './pages/Home'
import Movies from './pages/Movies'

const  Router = () =>{
  return(
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movies' element={<Movies/>} />
      </Routes>
    </>
  )
}

export default Router;