import React from 'react'
import Experience from '../Pages/Experience';
import Projects from '../Pages/Projects';
import Home from '../Pages/Home';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact';
import {Switch, Route, useLocation} from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

const AnimatedRoutes = () => {
const location = useLocation();
  return (
    <PageTransition 
      preset="moveToLeftFromRight"
      transitionKey={location.pathname}>
        <Switch location={location}>
            <Route path="/" element = {<Home/>}/>
            <Route path="/Skills" element= {<Skills/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Experience" element={<Experience/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Switch>
    </PageTransition>
  )
}

export default AnimatedRoutes