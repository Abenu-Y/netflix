import React from "react"
import './App.css'
import Home from "./Pages/Home/Home"
import { Outlet, Route, Routes } from "react-router-dom"
import Tv from "./Pages/Tv/Tv"
import Movies from "./Pages/Movies/Movies"
import Latest from "./Pages/Latest/Latest"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import NotFound from "./Components/NotFound/NotFound"


function App() {

  return (
    <div className="APP">
    
  <Routes>
     
        <Route path="/" element={<><Header /> <Outlet /> <Footer /> </>}>
                
                <Route path="/"  element={ <Home />} />
                <Route path='tv-shows'  element={<Tv />} />
                <Route path='movies'  element={<Movies />} />
                <Route path='latest' element={<Latest />} />
          
        </Route>

        <Route path='*' element={<NotFound />} />
        

   </Routes>-
      
    
    </div>
  )
}

export default App
