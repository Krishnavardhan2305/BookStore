import React from 'react'
import Navbar from "../components/Navbar";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center px-4 pt-24">
        <SignIn
          path="/login"
          routing="path"
          signUpUrl="/signup"
        />
      </div>
    </>
  )
}

export default Login
