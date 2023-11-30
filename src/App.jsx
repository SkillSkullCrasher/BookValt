import { React } from "react";
import {Routes,Route  } from "react-router-dom";
// import Home from 'Home.jsx'
import { DisplayBook } from "./pages/DisplayBook";

import { Home } from "./pages/Home";

import { CreateBooks } from "./pages/CreateBooks";
import { DeleteBook } from "./pages/DeleteBook";
import { UpdateBook } from "./pages/UpdateBook";
import "./App.css";


import Welcome from './pages/Welcome';




// UpdateBook

const App =()=>{
 
  return (
    // <div style={divStyle}>
    // {/* Your component content */}
    <div className="app-background">
  
    <Routes >
      
    <Route path="/" element={<Welcome />} />
      
    <Route path="/library" element={<Home />} />
      <Route path="/library/create" element={<CreateBooks />} />
      <Route path="/library/delete/:id" element={<DeleteBook />} />
      <Route path="/library/edit/:id" element={<UpdateBook />} />
      <Route path="/library/details/:id" element={<DisplayBook />} />
      
      </Routes>
     </div>
  )
}


export default App;