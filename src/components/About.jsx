import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return <p>{title}</p>;
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hey there 👋 I'm Farhan. I am currently the Lead Full Stack Software
          Engineer/Technical Lead at Digitera Interactive and a Computer Science
          & Business Management Student @ Carleton University in addition to
          being a grade 12 student at Colonel By Secondary School. I am
          constantly looking for enriching opportunities with cutting-edge
          technology that I can use to change the world for the better. I like
          working on team projects and getting to know new people, as it allows
          me to learn from other's experiences and create valuable networks
          along the way.Feel free to look at some of my work on GitHub or send
          me a message.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default About;
