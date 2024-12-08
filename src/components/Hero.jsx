import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { textVariant } from "../utils/motion";
const fadeIn = (direction, easing, delay, duration) => ({
  initial: {
    opacity: 0,
    x: direction === "left" ? 100 : -100, // Adjust the start position
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: easing || "spring", // Use spring for smoother animations
      damping: 25, // Adds smoothness to the spring effect
      stiffness: 200, // Controls the speed of the spring motion
      delay: delay || 0,
      duration: duration || 1, // Duration of the fade-in effect
    },
  },
});


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
          <div className={` ${styles.heroSubText} font-light`}>
            <motion.div
              variants={fadeIn("right", "spring", 0.1, 2.5)} // First sentence with delay 0.2
              initial="initial"
              animate="animate"
            >
              <p>Software engineering student</p>
            </motion.div>

            <motion.div
              variants={fadeIn("right", "spring", 0.6, 2.5)} // Second sentence with delay 0.4
              initial="initial"
              animate="animate"
            >    <p>Machine learning and MLOps enthusiast</p>

            </motion.div>

            <motion.div
              variants={fadeIn("right", "spring", 1, 3.5)} // Third sentence with delay 0.6
              initial="initial"
              animate="animate"
            >
              <p>Full stack web developer</p>

            </motion.div>

            {/* <motion.div
    variants={fadeIn("right", "spring", 1.4, 4.5)} // Fourth sentence with delay 0.8
    initial="initial"
    animate="animate"
  >
    <p>DevOps enthusiast</p>
  </motion.div> */}
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div style={{ height: "30px" }}></div>

      <div
        className=" xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 relative "
        style={{ marginTop: "-20px" }}
      >
        <a href="#about">

          <div className="w-[32px] h-[55px]  rounded-3xl border-2 border-secondary flex justify-center items-start p-2  ">
            <motion.div
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
