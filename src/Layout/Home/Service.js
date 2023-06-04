import React, { useEffect, useState } from "react";
import ServiceData from "./ServiceData";

const Service = () => {
  const [service, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

 

  return (
    <div className="mt-10 text-center">
      <div>
        <h1 className="text-xl font-bold text-orange-500">Service</h1>
        <h1 className="text-5xl text-black font-bold mt-3">Our Service Area</h1>
        <p className="mt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-8">
        {service.map((da) => (
          <ServiceData
            data={da}
          ></ServiceData>
        ))}
      </div>
      <div>
        <button className="btn btn-outline btn-secondary">More Services</button>
      </div>
    </div>
  );
};

export default Service;
