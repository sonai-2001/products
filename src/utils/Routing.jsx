import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home.jsx'
import Add from '../components/Add.jsx'
import Details from "../components/Details.jsx"
import Edit from '../components/Edit.jsx'

function Routing() {
  return (
   <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/add'  element={<Add/>}/>
    <Route path='/edit/:pid'  element={<Edit/>}/>
    <Route path='/products/:pid'  element={<Details/>}/>
   </Routes>
  )
}

export default Routing