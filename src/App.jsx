import { BrowserRouter } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import 'tailwindcss/tailwind.css';

import {
  Navbar,
  Hero,
  About,
  Tech,
  Contact,
  Experience,
  Feedbacks,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  // const redirectToMainPath = () => {
  //   window.location.href = "/";
  //   console.log("redirecting to main path");
  // };
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //   //  event.returnValue = ""; // Needed for older browsers like Internet Explorer
  //     redirectToMainPath();
  //   };

  //   addEventListener("beforeunload", handleBeforeUnload);
  //   return () => {
  //     removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <div></div>
          <Navbar />
       <Hero />
        </div>
        <About />
        <Experience />
        <div className="h-[40px]"></div>
        <Tech />
        <div className="h-[100px]"></div>
        <Works />
        {/* <Feedbacks /> */}
        <div className="h-[100px]"></div>

        <div className="relative z-0">
         <Contact />
        <StarsCanvas /> 
        </div>
        <div className="h-[40px]"></div>

      </div>
    </BrowserRouter>
  );
};

export default App;
