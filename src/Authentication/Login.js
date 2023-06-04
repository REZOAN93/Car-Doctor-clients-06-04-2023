import React, { useContext, useState } from "react";
import img1 from "../assets/images/login/login.svg";
import { BsFacebook } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
  const { SigninUser, googleAuthuse, user } = useContext(AuthContext);
  const [error, seError] = useState("");
  const navigate = useNavigate();

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    SigninUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seError(errorMessage);
      });
  };

  const handlegoogleLogin = (event) => {
    event.preventDefault();
    googleAuthuse();
  };

  return (
    <div className="hero my-5">
      <div className="hero-content w-full flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img src={img1} alt="" srcset="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body h-full">
            <h1 className="text-4xl text-center font-semibold">Log In</h1>
            <form action="" onSubmit={handleSignin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <p className="text-red-500">{error}</p>
                <input
                  className="btn btn-primary bg-orange-700 border-orange-700 hover:bg-orange-900 hover:border-orange-900"
                  type="submit"
                  value="Log in"
                />
              </div>
            </form>
            <div className="mt-5 items-center text-center ">
              <p>Or Sign In with</p>
              <figure className="px-10 pt-2 gap-3">
                <BsFacebook color="#3b5998" size={"30px"} />
                <GrLinkedinOption color="#0072b1" size={"30px"} />
                <img
                  className="w-12 cursor-pointer"
                  onClick={handlegoogleLogin}
                  src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
            <div className="mt-5 items-center text-center ">
              <h1>
                Have an Account?{" "}
                <Link className="text-orange-700 font-semibold" to={"/signup"}>
                  Sign Up
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
