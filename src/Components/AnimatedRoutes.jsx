import React from 'react'
import Experience from '../Pages/Experience';
import Projects from '../Pages/Projects';
import Home from '../Pages/Home';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact';
import Resume from '../Pages/Resume';
import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
const location = useLocation();
  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element = {<Home/>}/>
            <Route path="/Skills" element= {<Skills/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Experience" element={<Experience/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Resume" element={<Resume/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes