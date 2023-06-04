import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../../src/assets/logo.svg";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user, usersignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    usersignOut();
    navigate('/login')
  };

  const itemNav = [
    <>
      <Link to={"/"} className=" me-10">
        Home
      </Link>
      <Link to={"/about"} className=" me-10">
        About
      </Link>
      <Link to={"/service"} className=" me-10">
        Services
      </Link>
      <Link to={"/blog"} className=" me-10">
        Blog
      </Link>
      <Link to={"/order"} className=" me-10">
        Order Review
      </Link>
    </>,
  ];
  return (
    <div className="navbar bg-amber-100 rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {itemNav}
          </ul>
        </div>
        <img src={img1} className="w-20 h-12" alt="" srcset="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{itemNav}</ul>
      </div>
      <div className="navbar-end gap-3">
        <FaShoppingBag />
        <FaSearch />
        {user?.email ? (
          <>
            <Link to={"/details"}>Details</Link>
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-secondary"
            >
              SignOut
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline btn-secondary" to={"/login"}>
              Log In
            </Link>
            <Link className="btn btn-outline btn-secondary" to={"/signup"}>
              Sign Up
            </Link>
          </>
        )}

        <button className="btn btn-outline btn-secondary">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
