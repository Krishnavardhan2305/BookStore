import React from 'react'
import Navbar from "../components/Navbar";
import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center px-4 pt-24">
        <SignUp
          path="/signup"
          routing="path"
          signInUrl="/login"
        />
      </div>
    </>
  )
}

export default Signup
