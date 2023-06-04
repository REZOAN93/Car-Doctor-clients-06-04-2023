import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const ProductDetails = (props) => {
  const { id, img, name, price } = props.product;
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10  pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-62 bg-gray-200" />
      </figure>
      <div className="card-body items-center text-center">
        <div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
        </div>

        <h2 className="card-title">{name}</h2>
        <h2 className="text-lg font-bold text-yellow-600">$ {price}</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
