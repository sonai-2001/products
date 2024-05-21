import React, { useContext, useState } from "react";
import { UserContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

function Add() {
  const { products, setProducts } = useContext(UserContext);

  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [price, setprice] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, serDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !image.length > 0 &&
      !price != null &&
      !category.length > 0 &&
      !description.length > 0 &&
      !title.length > 0
    ) {
      alert("please enter all the values");
      return;
    }
    const newproduct = {
      id: nanoid(),
      image,
      price,
      category,
      title,
      description,
    };
    setProducts([...products, newproduct]);
    localStorage.setItem('products', JSON.stringify([...products, newproduct]));
    navigate("/");
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/2  h-1/2 flex flex-col gap-5 "
      >
        <h1 className="text-2xl">Add Product</h1>
        <input
          onChange={(e) => setImage(e.target.value)}
          placeholder="enter image"
          name="image"
          type="text"
          className="border border-black"
          value={image}
        />
        <input
          placeholder="enter price"
          name="price"
          type="text"
          className="border border-black"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
        <input
          placeholder="enter category"
          name="category"
          type="text"
          className="border border-black"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          placeholder="enter title"
          name="title"
          type="text"
          className="border border-black"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          placeholder="enter description"
          name="description"
          className="border border-black"
          onChange={(e) => serDescription(e.target.value)}
          value={description}
        ></textarea>

        <input className="cursor-pointer" type="submit" value="submit" />
      </form>
      <div  onClick={() => {
          navigate("/");
        }} className="absolute inline top-0 left-5 cursor-pointer">
      <i className="ri-arrow-left-line"></i>
      <span>go back</span>

      </div>
    </div>
  );
}

export default Add;
