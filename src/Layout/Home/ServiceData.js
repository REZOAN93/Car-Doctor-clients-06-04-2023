import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceData = ({data}) => {
  const { title, img, price,_id } = data;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-5 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <h1 className="card-title text-orange-600">Price: ${price}</h1>
        <div className="card-actions justify-end">
          <Link className="serviceDetails" to={`/OrderSubmit/${_id}`}>
            <BsArrowRight size="1.9rem" />
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default ServiceData;
