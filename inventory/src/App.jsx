import { useState } from 'react'
import './style.scss'
import Rootlayout from "./components/navbar/Rootlayout";
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/Authenticated/HomePage'
import Tabs from './components/ui/Tabs';
function App() {

  return (
    <>
      
      <Routes>
        <Route element={<Rootlayout/>} >
        <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
     
    </>
  )
}

export default App
