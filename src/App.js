import React from 'react'
import Create from './Components/Create'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './Components/Read.jsx'
import Update from './Components/Update.jsx'
const App = () => {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
