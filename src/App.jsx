import { useState } from 'react'
import CreatePaste from './Pages/createPaste'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<CreatePaste />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
