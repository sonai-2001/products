import React from 'react'
import { Link } from 'react-router-dom'

function Card({p}) {
  return (
    <Link to={`/products/product/${p.id}`}  className=" rounded-md overflow-hidden w-[25vw] h-[28vh] sm:w-[150px] sm:h-[170px] md:w-[25vw] md:h-[35vh] lg:w-[240px] lg:h-[250px]  bg-yellow-300">
          <div
            style={{
              backgroundImage:
                `url(${p.image})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}
            className="w-full h-[70%] lg:h-[80%]"
          ></div>
          <h1 className="w-full h-[30%] lg:h-[20%] text-center text-xs md:text-md">
            {p.title}
          </h1>
        </Link>
  )
}

export default Card