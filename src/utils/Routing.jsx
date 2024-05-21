import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home.jsx'
import Add from '../components/Add.jsx'
import Details from "../components/Details.jsx"
import Edit from '../components/Edit.jsx'

function Routing() {
  return (
   <Routes>
    <Route path='/products'  element={<Home/>}/>
    <Route path='/products/add'  element={<Add/>}/>
    <Route path='/products/edit/:pid'  element={<Edit/>}/>
    <Route path='/products/product/:pid'  element={<Details/>}/>
   </Routes>
  )
}

export default Routing