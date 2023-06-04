import React from "react";
import { RiTeamFill } from "react-icons/ri";

const Features = () => {
  const Features = [
    { id: 1, title: "Expert Team" },
    { id: 2, title: "Timely Delivery" },
    { id: 3, title: "24/7 Support" },
    { id: 4, title: "Best Equipment" },
    { id: 5, title: "100% Gurenty" },
    { id: 6, title: "Timely Delivery" },
  ];
  
  return (
    <div>
      <div className="text-center">
        <h1 className="text-xl font-bold text-orange-500">Core Features</h1>
        <h1 className="text-5xl text-black font-bold mt-3">Why Choose Us</h1>
        <p className="mt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-6  my-16">
        {Features.map((ma) => (
          <>
            <div className="card w-48 bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <figure className="px-10 pt-10">
                        <RiTeamFill color="orange" size={"84px"}/>
                </figure>
                <h2 className="font-bold">{ma.title}</h2>
                
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Features;
