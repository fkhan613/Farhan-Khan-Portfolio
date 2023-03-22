import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TypeWriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eef]">Farhan</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-3 text-white-100 flex flex-wrap`}
          >
            I'm a&nbsp;
            <span className="text-[#915eef]">
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Software Engineer",
                    "Technical Lead",
                    "Computer Science and <br>Business Management Student",
                    "Tech Enthousiaste",
                    "Problem Solver",
                    "Lifelong Learner",
                  ],
                }}
              />
            </span>
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
