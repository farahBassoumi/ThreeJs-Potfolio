import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { sectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => {
  return (

    <Tilt className=" w-full xs:w-[250px]">
      <motion.div
        className="w-full green-pink-gradient p-1 rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 1 * index,1)}
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="font-bold text-center text-white text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>

  );
};
const About = () => {
  return (
    <div className="">
      <motion.div variants={textVariant()}>
        {/* <p className={styles.heroSubText}>Intoduction</p> */}
        <h2 className={styles.heroHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("right", "spring", 0.2, 2)}
      >



        An enthousiastic full-stack developer and a fourth-year
        Software Engineering student at INSAT, deeply passionate about Web Development, Devops, Machine Learning and MLops.
        <br />
      </motion.p>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("right", "spring", 0.5, 4)}
      >
     
        Driven by a desire to constantly grow, I am committed to expanding my knowledge and honing my skills, while working
        collaboratively to create impactful solutions.
      </motion.p>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("right", "spring", 0.8, 6)}
      >
        I am particularly excited to leverage my expertise in Web Development
        and Machine Learning to tackle real-world challenges, staying ahead by embracing new tools and frameworks in a rapidly
        evolving tech landscape.



      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center mx-auto ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default sectionWrapper(About, "about");
