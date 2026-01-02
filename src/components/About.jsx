import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          Hey there 👋, I’m Farhan, Founder and Lead Software Engineer at Lunaris Software. I
          design and build scalable, high performance web applications using
          modern technologies like Next.js, React, TypeScript, and Node.js. I’ve
          led engineering teams, shipped production systems used by real users,
          and delivered projects end to end from architecture and UI to
          deployment and maintenance. Previously, I served as Lead Software
          Engineer at Digitera Interactive and co-founded Prom Planner, where I
          focused on technical leadership, code quality, and execution speed.
          I’ve worked with startups and businesses to turn vague ideas into
          reliable, maintainable software that performs. I’m also a Computer
          Science and Business Management student at Carleton University, which
          gives me a strong balance between technical depth and business
          thinking. I value clean architecture, measurable results, and building
          systems that scale without unnecessary complexity. If you’re a
          recruiter looking for a strong engineering hire or a client looking
          for someone who can actually ship and maintain quality software, feel
          free to check out my GitHub or reach out directly.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
