import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../utils/Context";

function Edit() {
  const { products, setProducts } = useContext(UserContext);
  const [product, setProduct] = useState({
    category: "",
    description: "",
    image: "",
    price: "",
    title: "",
  });
  console.log(product.image)
  const navigate=useNavigate()

  const getProduct = () => {
    const p = products.find((p)=>p.id == pid);
    console.log(p)
    setProduct(p);
  };
  const { pid } = useParams();
  console.log(pid)
  useEffect(() => {
    products && getProduct();
  }, [products]);

  const handleChange=(e)=>{
           setProduct({...product,[e.target.name]: e.target.value});
           console.log(product);
  }
  const editProduct = () => {
       const edited= products.map((p,i)=>{
               if(product.id===p.id){
                   return product
               }
               else{
                return p
               }
           })
           setProducts(edited)
           localStorage.setItem('products', JSON.stringify(edited))
           navigate("/products/")
  }
  const handleSubmit=(e)=>{
          e.preventDefault();
          console.log(product)
          editProduct()
        //   setProducts([...products,product])
        //   localStorage.setItem('products', JSON.stringify([...products,product]))
  }
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <form onSubmit={handleSubmit} className="w-1/2  h-1/2 flex flex-col gap-5 ">
        <h1 className="text-2xl">Edit Product</h1>
        <input
          placeholder="enter image"
          name="image"
          type="text"
          className="border border-black"
          
          value={product.image}
          onChange={handleChange}
        />
        <input
          placeholder="enter price"
          name="price"
          type="text"
          className="border border-black"
          value={product.price}
          onChange={handleChange}

        />
        <input
          placeholder="enter category"
          name="category"
          type="text"
          className="border border-black"
          value={product.category}
          onChange={handleChange}

        />
        <input
          placeholder="enter title"
          name="title"
          type="text"
          className="border border-black"
          value={product.title}
          onChange={handleChange}

        />
        <textarea
          placeholder="enter description"
          rows="5"
          cols="10"
          name="description"
          className="border border-black"
          value={product.description}
          onChange={handleChange}

        ></textarea>

        <input className="cursor-pointer" type="submit" value="submit" />
      </form>
      <div  onClick={() => {
          navigate("/products/");
        }} className="absolute inline top-0 left-5 cursor-pointer">
      <i className="ri-arrow-left-line"></i>
      <span>go back</span>

      </div>
    </div>
  );
}

export default Edit;
