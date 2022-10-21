import React, { useState,useRef, useContext, useEffect } from "react";
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

  let [user , setUser]=useState([])

  async function getData(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos')
     const result= await response.json()
    setUser(result)
  }
   useEffect(()=> {
  
    getData()
  },[])

   
  
  return (
    <>
      <context.Provider value={{user}}>
      
        <main>
          <BrowserRouter>
          <Navbar/>
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
