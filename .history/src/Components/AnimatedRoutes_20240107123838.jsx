import React from 'react'
import Experience from './Experience';
import Projects from './Projects';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import {Routes, Route,} from 'react-router-dom';
const AnimatedRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Skills" element= {<Skills/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
  )
}

export default AnimatedRoutes