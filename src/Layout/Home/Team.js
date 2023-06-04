import React from "react";
import img1 from "../../assets/images/team/1.jpg";
import img2 from "../../assets/images/team/2.jpg";
import img3 from "../../assets/images/team/3.jpg";
import TeamMember from "./TeamMember";

const Team = () => {
  const Engineer = [
    { id: 1, img: img1, title: "Car Engine Plug", job: "Engin Expert" },
    { id: 1, img: img2, title: "Car Engine Plug", job: "Engin Expert" },
    { id: 1, img: img3, title: "Car Engine Plug", job: "Engin Expert" },
  ];

  return (
    <div>
      <div className="text-center mt-12">
        <h1 className="text-xl font-bold text-orange-500">Team</h1>
        <h1 className="text-5xl text-black font-bold mt-3">Meet Our Team</h1>
        <p className="mt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-3 ml-5 pl-5 pr-8 py-5 gap-5">
          {Engineer.map((exp) => (
            <TeamMember expert={exp}></TeamMember>
          ))}
        </div>
        <div className="relative w-full flex justify-between transform -translate-y-1/2 bottom-60">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
        </div>
        <div className="relative w-full flex justify-end transform -translate-y-1/2 bottom-72 ">
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
