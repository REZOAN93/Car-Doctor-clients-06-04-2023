import React from "react";
import bannerimg1 from "../../assets/images/banner/1.jpg";
import bannerimg2 from "../../assets/images/banner/2.jpg";
import bannerimg3 from "../../assets/images/banner/3.jpg";
import bannerimg4 from "../../assets/images/banner/4.jpg";
import bannerimg5 from "../../assets/images/banner/5.jpg";
import bannerimg6 from "../../assets/images/banner/6.jpg";
import BannerItem from "./BannerItem";

const Banner = () => {
  const banners = [
    { id: 1, img: bannerimg1, next: 2, prev: 6 },
    { id: 2, img: bannerimg2, next: 3, prev: 1 },
    { id: 3, img: bannerimg3, next: 4, prev: 2 },
    { id: 4, img: bannerimg4, next: 5, prev: 3 },
    { id: 5, img: bannerimg5, next: 6, prev: 4 },
    { id: 6, img: bannerimg6, next: 1, prev: 5 },
  ];
  return (
    <div className="carousel w-full my-5 rounded-lg">
      {banners.map((itemlist) => (
        <BannerItem item={itemlist}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
