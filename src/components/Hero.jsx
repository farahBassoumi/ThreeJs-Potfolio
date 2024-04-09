import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={` ${styles.paddingX} absolute inset-0  top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        {/* top: 0; right: 0; bottom: 0; left: 0; mx:margin-horizontal */}
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#804af3] z-10">
            <div
              className="w-1 ml-2 mt-1  violet-gradient "
              style={{ height: "400px" }}
            ></div>
          </div>
        </div>

        <div>
          <h1 className={` ${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#804af3] ">Farah</span>
          </h1>
          <p className={` ${styles.heroSubText} mt-2 text-white-100`}>
            I deveolp 3D visuals users
            <br className="sm:block hidden " /> interfaces and web applications
          </p>
        </div>
      </div>
      <div style={{ height: "0px" }}></div>
      <ComputersCanvas className="" />

      <div
        className=" xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 relative "
        style={{ marginTop: "-20px" }}
      >
        <a href="#about">
          {" "}
          <div className="w-[32px] h-[55px]  rounded-3xl border-2 border-secondary flex justify-center items-start p-2  ">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full  bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
