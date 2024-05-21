import React, { createContext, useEffect, useState } from 'react'

import axios from "./Axios"

export const UserContext=createContext()
function Context(props) {
 console.log("context")
    // const getProducts= async ()=>{
    //       const p= await axios.get("/products") 
    //       console.log(p.data)
    //       setProducts(p.data) 
    // }
    // useEffect(() => {
    //   console.log("usecontext")
    //   getProducts()
      
    // }, [])
    
 const[products,setProducts]=useState( JSON.parse(localStorage.getItem('products'))||
 null)
    return (
      <UserContext.Provider value={{products,setProducts}}>{props.children}</UserContext.Provider>  
  )
}

export default Context