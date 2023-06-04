import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Features from "./Features";
import Products from "./Products";
import Service from "./Service";
import Team from "./Team";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Contact></Contact>
      <Products></Products>
      <Team></Team>
      <Features></Features>
    </div>
  );
};

export default Home;
