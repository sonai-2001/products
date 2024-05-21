import React, { useContext, useEffect, useState } from "react";
import Nav from "./partial/Nav";
import { UserContext } from "../utils/Context";
import Card from "./partial/Card";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

function Home() {
  const { products, setProducts } = useContext(UserContext);

  const [items, setitems] = useState(null);
  const { search } = useLocation();
  console.log(typeof search);
  const getCategory = () => {
    const cat = decodeURIComponent(search.split("=")[1]);
    return cat;
  };

  const filteredData = (c) => {
    return products.filter((p, i) => p.category === c);
  };

  useEffect(() => {
    if (products) {
      const c = getCategory();
      if (c != "undefined") {
        setitems(filteredData(c));
      } else {
        setitems(products);
      }
    } else {
      return;
    }

    // products && setitems(products)
  }, [products, search]);

  return items ? (
    <div className="w-full h-screen flex ">
      <Nav />

      <div className="w-[88vw] md:w-[75vw] h-screen  flex items-start justify-around flex-wrap gap-5 leading-[20px] p-[3px] py-10 md:p-2 overflow-y-auto">
        {items.map((p, i) => (
          <Card key={i} p={p} />
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Home;
