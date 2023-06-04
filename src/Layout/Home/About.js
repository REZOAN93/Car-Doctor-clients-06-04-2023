import React from "react";
import img1 from '../../assets/images/about_us/parts.jpg'
import img2 from '../../assets/images/about_us/person.jpg'


const About = () => {
  return (
    <div className="hero ">
      <div className="hero-content">
        <div className="w-1/2 relative">
            <img className="rounded-lg w-3/4 relative" src={img2} alt="" srcset="" />
            <img className="rounded border-8 w-1/2 h-60 absolute top-36 right-10" src={img1} alt="" srcset="" />
        </div>
        <div className="w-1/2 bg-base-100">
          <h1 className="text-xl font-bold text-orange-500">About Us</h1>
          <h1 className="text-5xl text-black font-bold mt-5">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="mt-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="mt-5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-secondary mt-9">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
