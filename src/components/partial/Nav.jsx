import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/Context";

function Nav() {

  const{products}=useContext(UserContext)
  const [category, setcategory] = useState(null)
  const getCategory=()=>{
       const category = products.reduce((cat,pr)=>{
          cat=[...cat,pr.category]
          return cat;
       },[])

       const distcat=[... new Set(category)]
      setcategory(distcat)
  }
  useEffect(()=>{
        products && getCategory()
  },[products])
  const [open, setOpen] = useState(false)

  const color = () => {
    const randomValue = () => Math.floor(Math.random() * 256);
    const randomOpacity = () => Math.random().toFixed(2); // Generates a number between 0.00 and 1.00
    return `rgba(${randomValue()},${randomValue()},${randomValue()},1)`;
  };
  
  return (
    <div className=" md:w-[25vw] w-[12vw] h-screen bg-red-100 p-4 relative">
      <div className={`flex flex-col py-8 gap-3 bg-red-100 md:h-fit  absolute ${open ?"top-0 -right-[70px] w-[100px] h-[100vh] ":"-left-[300px]"} md:static `}>
        <div className=" text-center">
        <Link to="/products/add" className=" px-2  py-1 w-fit border-[2px] border-blue-200  rounded-md">
          Add item
        </Link>
        
        </div>
        <h1 className=" w-full md:text-2xl">Category</h1>

        <ul>
         {category && category.map((c,i)=>(
           <Link to={`/products/?category=${c}`} key={i} className=" w-full block my-2 flex gap-2 items-center justify-start">
           <span style={{
            backgroundColor:`${color()}`
           }} className={`inline-block w-[10px] h-[10px] rounded-full `}></span>
           {c}
         </Link>
         ))}
         <Link to="/products" className=" w-full block my-2 flex gap-2 items-center justify-start">
           <span style={{
            backgroundColor:`${color()}`
           }} className={`inline-block w-[10px] h-[10px] rounded-full `}></span>All</Link>
          
         
            
        </ul>
      </div>
      <div  className={`flex flex-col leading-none w-fit items-center justify-center absolute top-2 left-[50%] -translate-x-[50%] md:hidden ${open && "hidden"}`}>
        <span>menu</span>
        <i onClick={()=>{
          setOpen(!open)
        }} className={`ri-menu-line ` }></i>
      </div>
      <i onClick={()=>{
          setOpen(!open)
        }} className={`ri-close-large-fill absolute top-[3px] -right-16 cursor-pointer ${!open && "hidden"} md:hidden`}></i>
    </div>
  );
}

export default Nav;
