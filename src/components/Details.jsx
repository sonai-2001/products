import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../utils/Context";
import Loading from "./Loading";

function Details() {
  const navigate = useNavigate();
  const { pid } = useParams();
  const { products, setProducts } = useContext(UserContext);
  const [product, setproduct] = useState(null);


  const handleDelete=(pid)=>{
          const afterdelete=products.filter((p)=>p.id!==pid)
          setProducts(afterdelete)
          localStorage.setItem('products', JSON.stringify(afterdelete))
          navigate("/products/")
  }
  const getProduct = () => {
    const p = products.find((p, i) => p.id == pid);
    setproduct(p);
  };
  useEffect(() => {
    products && getProduct();
  }, [products]);
  return product ? (
    <div className="w-full h-screen bg-zinc-500 flex items-center justify-center relative">
      <div className="w-[70vw] lg:py-5  bg-white">
        <div className="w-full h-[50vh] lg:h-[63vh] bg-red-100">
          <img
            className="w-full h-full object-cover object-top "
            src={product.image}
            alt=""
          />
        </div>
        <div className="p-2">
          <h1 className="text-xl mt-2 leading-none tracking-tight">
            {product.title}
          </h1>
          <p className="mt-2 leading-none">{product.description}</p>
          <span className="block mt-2">{product.category}</span>
          <span className="text-zinc-700 inline-block mt-2">
            ${product.price}
          </span>

          <div className="mt-2 text-center">
            <Link to={`/products/edit/${pid}`} className="px-3 py-2 rounded-md border border-blue-300 mr-4">
              Edit
            </Link>
            <button onClick={()=>handleDelete(pid)}  className="px-3 py-2 rounded-md border border-blue-300">
              Delete
            </button >
          </div>
        </div>
      </div>

      <span
        className="flex items-center absolute top-1 left-2 text-2xl text-white cursor-pointer"
        onClick={() => {
          navigate("/products");
        }}
      >
        <i className="ri-arrow-left-line"></i>
        <span>go back</span>
      </span>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
