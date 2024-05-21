import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
 
 const [open, setopen] = useState(true)
    return (
    <div className='h-screen w-[20vw] md:w-[25vw] bg-blue-200  gap-3 p-4 relative '>
    
    <div className={`flex flex-col  md:static absolute ${open ?"-right-[93px] top-0 bg-blue-200 w-[30vw] h-full":"-left-[300px]"} ` } >
    <h1 className='my-3'>Category</h1>
    
<ul>
    <Link  to="/high">cat1</Link>
    <li>cat1</li>
    <li>cat1</li>
    <li>cat1</li>
</ul>
    </div>

    {open && <i onClick={()=>{
        setopen(!open)
    }} class="ri-close-fill absolute -right-[94px] top-1 cursor-pointer "></i>}

<div className={`flex flex-col items-center justify-center w-fit absolute top-3 right-[30%] md:hidden leading-none ${open && "hidden" } cursor-pointer`}>
    <span>MENU</span>
    <i onClick={()=>{
        setopen(!open)
    }} class="ri-menu-line"></i>
</div>
    </div>
  )
}

export default SideNav