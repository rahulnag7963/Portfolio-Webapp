import React from 'react'

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