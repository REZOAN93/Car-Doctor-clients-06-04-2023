import React from "react";
import "./banneritem.css";

const BannerItem = (props) => {
  const { img, id, prev, next } = props.item;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="img-gradient w-full">
      <img src={img} alt="" id="carosalimg" className="w-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-10 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-10 top-2/4 w-1/2">
        <h1 className="text-xl text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-10 gap-5 top-3/4">
        <button className="btn btn-accent">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-1">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
