import React from 'react'
import Experience from './Experience';
import Projects from './Projects';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
const AnimatedRoutes = () => {
const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Skills" element= {<Skills/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Contact" element={<Contact/>}/>
    </Routes>
  )
}

export default AnimatedRoutes