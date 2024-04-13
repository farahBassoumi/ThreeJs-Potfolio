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
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
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
        <p className={styles.heroSubText}>Intoduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a full stack developer with a focus on front end development. I
        have a passion for creating beautiful and functional websites and
        applications. I have experience working with a variety of technologies
        including React, Node.js, and MongoDB. I am always eager to learn new
        things and improve my skills. I am a team player and enjoy collaborating
        with others to create great products. I am currently seeking new
        opportunities to further develop my skills and grow as a developer.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default sectionWrapper(About, "about");
