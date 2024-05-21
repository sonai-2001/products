import React, { useState } from "react";

function Navp() {
  
  const[open,setOpen]=useState(true)
    return (
    <div className="w-full h-[10vh] bg-blue-300 flex items-center justify-between py-2 px-7 md:px-10 relative">
      <div className="flex items-center justify-center gap-3 text-2xl">
        <h1>Designer</h1>
        <span>
          <i class="ri-focus-line"></i>
        </span>
      </div>

      <ul className={`flex  flex-col items-center pb-5 md:pb-0 md:flex-row gap-5   absolute left-0 ${open ? "top-[52px]":"-top-[300px]"} bg-blue-300 w-full md:w-fit  md:static `}>
       <li>Home</li>
       <li>About</li>
       <li>Contact</li>
       <li>Projects</li>
      </ul>

      <i onClick={()=>{
        setOpen(!open)
      }}  class={`${open ? "ri-close-fill":"ri-menu-line"} absolute right-3 md:hidden text-2xl cursor-pointer `}></i>
      
    </div>
  );
}

export default Navp;
