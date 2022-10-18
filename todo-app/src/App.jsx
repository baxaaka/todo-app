import React, { useState,useRef, useContext } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Team from './components/Team'
import Projects from './components/Projects'
import Error from './components/Error'

import {BrowserRouter, Routes ,Route} from 'react-router-dom'



import context from "./context";
import Home from './components/Home'

const App = () => {

  const [message, setMessage] = useState("HEllo react");
  const [info, setInfo] = useState({
    item1: "item-1",
    item2: "item-2",
    item3: "item-3",
  });



  return (
    <>
      <context.Provider value={{message,info}}>
      
        <main>
          <BrowserRouter>
          <Navbar info={info} />
            <Routes>
             <Route path="/" element={ <Home/>} />
             <Route path="/team" element={  <Team/>} />
             <Route path="/projects" element={<Projects/>} />
             <Route path="*" element={<Error/>} />
                
             
            </Routes>
            <Footer />
          </BrowserRouter>
        
        </main>
       
      </context.Provider>
    
    </>
  );
};

export default App;
