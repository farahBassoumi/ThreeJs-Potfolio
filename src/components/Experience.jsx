import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants/constants";
import { sectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h4 className="text-white text-[20px] font-bold ">{experience.title}</h4>
      <p className="text-secondary text-[16px] " style={{ margin: 0 }}>
        {" "}
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2 ">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wide"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>what i have done so far</p>
        <h2 className={styles.heroHeadText}>work experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default sectionWrapper(Experience, "work");
