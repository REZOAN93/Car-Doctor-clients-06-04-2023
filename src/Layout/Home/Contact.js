import React from "react";
import { FcCalendar } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { MdPlace } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex justify-around bg-black rounded-xl h-72 text-white mt-8 ">
      <div className="mt-24 flex gap-2">
        <div className="pt-1">
          <FcCalendar size={"50px"} />
        </div>
        <div>
          <h1>We are open monday-friday</h1>{" "}
          <h1 className="text-2xl">7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className="mt-24 flex gap-4">
        <div className="pt-3">
          <FiPhoneCall size={"40px"} />
        </div>
        <div>
          <h1>Have a question?</h1>
          <h1 className="text-2xl">+2546 251 2658</h1>
        </div>
      </div>
      <div className="mt-24 flex gap-1">
        <div className="pt-1">
          <MdPlace size={"40px"} color={'red'} />
        </div>
        <div>
          <h1>Need a repair? our address</h1>{" "}
          <h1 className="text-2xl">Liza Street, New York</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
