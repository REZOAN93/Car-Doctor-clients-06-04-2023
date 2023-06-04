import React from "react";
import img1 from "../../assets/images/products/1.png";
import img2 from "../../assets/images/products/2.png";
import img3 from "../../assets/images/products/3.png";
import img4 from "../../assets/images/products/4.png";
import img5 from "../../assets/images/products/5.png";
import img6 from "../../assets/images/products/6.png";
import ProductDetails from "./ProductDetails";

const Products = () => {
  const product = [
    { id: 1, name:"Car Engin Plug", img: img1, price: 20 },
    { id: 2, name:"Car Engin Plug", img: img2, price: 21 },
    { id: 3, name:"Car Engin Plug", img: img3, price: 22 },
    { id: 4, name:"Car Engin Plug", img: img4, price: 23 },
    { id: 5, name:"Car Engin Plug", img: img5, price: 24 },
    { id: 6, name:"Car Engin Plug", img: img6, price: 25 },
  ];

  return (
    <div>
      <div className="text-center mt-12">
        <h1 className="text-xl font-bold text-orange-500">Popular Products</h1>
        <h1 className="text-5xl text-black font-bold mt-3">
          Browse Our Products
        </h1>
        <p className="mt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-10">
        {
            product.map((det)=><ProductDetails product={det}></ProductDetails>)
        }
      </div>
    </div>
  );
};

export default Products;
