import React, { useContext, useState } from "react";
import img1 from "../assets/images/login/login.svg";
import { BsFacebook } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const SignUp = () => {
  const { CreateNewUser,googleAuthuse,user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    CreateNewUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        if (user?.email) {
          form.reset();
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  const handleGoogleLogin=(event)=>{
    event.preventDefault()
    googleAuthuse()    
  }

  return (
    <div className="hero my-5">
      <div className="hero-content w-full flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img src={img1} alt="" srcset="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body h-full">
            <h1 className="text-4xl text-center font-semibold">Sign Up</h1>
            <form action="" onSubmit={handleCreateUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-5">
                <p className="text-red-500">{error}</p>
                <input
                  className="btn btn-primary bg-orange-700 border-orange-700 hover:bg-orange-900 hover:border-orange-900"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="mt-5 items-center text-center ">
              <p>Or Sign Up with</p>
              <figure className="px-10 pt-2 gap-3">
                <BsFacebook color="#3b5998" size={"30px"} />
                <GrLinkedinOption color="#0072b1" size={"30px"} />
                <img
                  className="w-12 cursor-pointer"
                  onClick={handleGoogleLogin}
                  src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
            <div className="mt-1 items-center text-center ">
              <h1>
                Alredy have an Account?{" "}
                <Link className="text-orange-700 font-semibold" to={"/login"}>
                  Log In
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
