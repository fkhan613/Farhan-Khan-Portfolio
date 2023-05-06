import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import  TechCard  from "./TechCard";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
          <TechCard icon={tech.icon} name={tech.name}/>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
