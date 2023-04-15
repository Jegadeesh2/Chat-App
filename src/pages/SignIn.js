import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignIn = () => {
  const [isError, setIsError] = useState(false);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const email = e.target[0].value;
  //   const password = e.target[1].value;

  // //   try {
  // //     await signInWithEmailAndPassword(auth, email, password);
  // //   } catch (isError) {
  // //     setIsError(true);
  // //   }
  // };
  return (
    <div className="signIn-page">
      <div className="form-wrapper">
        <span className="logo"> J Chat </span>
        <span className="title"> Login</span>
        <form className="form">
          <input type="email" placeholder="Email" className="input" required/>
          <input type="password" placeholder="Password" className="input" required/>
          {isError && (
            <span className="notification">Something went wrong.!</span>
          )}
          <button type="submit" className="btn">
            SignIn
          </button>
        </form>
        <Link to="/signup" className="link">
          {" "}
          <span className="link-text"> Don't have an account!</span> SignUp
        </Link>
      </div>
    </div>
  );
};

export default SignIn;