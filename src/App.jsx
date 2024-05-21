import React, { useEffect } from 'react'
import Routing from './utils/Routing'
import Navp from "./components/Navp.jsx"
import SideNav from './components/SideNav.jsx'

function App() {
  console.log("app")
  useEffect(()=>{
    console.log("useApp")
  })
  return (
    // <div >
     <Routing/>
    // </div>
    // <Navp/>
    
  )
}

export default App