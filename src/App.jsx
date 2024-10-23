
import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Movies from './Components/Movies/Movies';
import Series from './Components/Series/Series';
import Anime from './Components/Anime/Anime';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Register/Signup';
import SeriesDetails from './Components/Series/SeriesDetails';
import { LoginContext } from './Context/LoginContext/LoginContext';
import Profile from './Components/Profile/Profile';


function App() {

  const [userName, setUserName] = useState("")

  return (

   <>
      <LoginContext.Provider value={{userName , setUserName}}>

       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Navbar />}>
              <Route path='/' element={<Home/>}/>
              <Route path='/Movies' element={<Movies/>}/>
              <Route path='/Series' element={<Series/>}/>
              <Route path="/series/:id" element={<SeriesDetails />} />
              <Route path='/Anime' element={<Anime/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/Register' element={<Signup/>}/>
              <Route path='/Profile' element={<Profile/>}/>
           </Route>
         </Routes>
         <Footer/>
       </BrowserRouter>
     </LoginContext.Provider>
   </>
  )
}

export default App
