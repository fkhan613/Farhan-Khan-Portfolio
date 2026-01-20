import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  express,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  digitera,
  omega,
  java,
  bsimg,
  lorchid,
  pp,
  laravel,
  busSchedule,
  mysql,
  mezzaluna,
  kova,
  samikabir,
  beyondTheWheel,
  yellowstone,
  andy,
  php,
  nopfp,
  python,
  promplanner,
  lunarisLogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Software Engineer",
    icon: creator,
  },
  {
    title: "Backend Software Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "ExpressJS",
    icon: express,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Laravel Orchid",
    icon: lorchid,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Founder & Lead Software Engineer",
    company_name: "Lunaris Software",
    link: "https://www.lunarissoftware.com/",
    icon: lunarisLogo,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Build performance-first digital experiences for global clients with modern stacks (Next.js, React, TypeScript) and custom software tuned for growth.",
      "Deliver full lifecycle work—design, build, deploy, maintain—with clean, scalable architecture and SEO baked in from day one.",
      "Prioritize speed and UX (95+ Lighthouse targets) through minimalist, conversion-focused design and technical rigor.",
      "Partner with small businesses, startups, and entrepreneurs to ship fast, beautiful products supported by transparent communication.",
    ],
  },
  {
    title: "Lead Full Stack Software Engineer",
    company_name: "Digitera Interactive",
    link: "https://digitalmarketingplus.com/",
    icon: digitera,
    iconBg: "#383E56",
    date: "Nov 2022 - Jan 2025",
    points: [
      "Performed technical interviews with potential candidates and assessed their soft and hard skills to determine whether or not they make a good fit at Digitera.",
      " Performed code reviews and mentored junior engineers.",
      " Designed and single-handedly implemented the famous bid system connecting prom vendors directly to prom committees & students, B2B & B2C.",
      " Introduced and developed from the ground up the second, third and fourth tier of Prom Planner which is the Local Admin, Student & Vendor portals.",
      "Designed and implemented a fast & secure mass-import mechanism that allows users to mass-import various data sets in a CSV format.",
      "Designed and implemented numerous internal REST APIs used by the internal admin dashboard and our mobile team which provides insights about Prom Planner.",
      " Implemented a 2-degree of security involved in accepting/rejecting when a user attempts to create an account to avoid malicious spam attacks or fake accounts.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "Digitera Interactive",
    icon: digitera,
    link: "https://digitalmarketingplus.com/",
    iconBg: "#383E56",
    date: "June 2022- Nov 2022",
    points: [
      "Built various functional interfaces used by stakeholders with PHP, Laravel, Laravel Orchid, MySQL, HTML & CSS making administrative tasks efficient and more straightforward to use.",
      "Designed and Implemented multiple fast and secure CRUD (create, read, update, delete) functionalities used by stakeholders to facilitate administrative tasks for the Prom Planner.",
      "Attended weekly standups with stakeholders and the CEO in addition to developing reports based on my continuous contributions to the company.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Farhan is an extremely bright and talented computer science prodigy. He has always demonstrated an incredible keenness for problem solving, logical thinking, and application development. He is also an extremely quick and efficient learner, having learned and properly understood the process of creating a fully functional web application in under 5 months. Apart from that, he excels at object oriented programming, as well as all logic oriented sciences. He is extremely passionate about what he does, never gives up, and has an incredibly positive and enthusiastic work ethic, which is one of my favorite traits about him. He is always curious to learn new things and expand his skills and knowledge in any possible way, as he has demonstrated by taking on various personal projects in his free time, in all of which he has learned new concepts and design strategies. He is extremely determined to constantly improve himself, and, in my opinion, is the personification of "the only person you should strive to be better than is the person you were yesterday" demonstrated by his leap into multi-level secure programming upon discovery of a security vulnerability in one of his older projects. It is with great pleasure and enthusiasm that I recommend Farhan to you. He is in every way unique, and will be most certainly be an invaluable asset to those he works both for and alongside.',
    name: "Zade Ammar",
    designation: "Compsci & Cyber Security Student",
    link: "https://www.linkedin.com/in/zade-ammar/",
    company: "Carleton University",
    image: nopfp,
  },
  {
    testimonial:
      "Reliable, intelligent and trustworthy individual who takes advantage of opportunities, one to look out for. Farhan would be an invaluable asset to any fortunate organization he joins.",
    name: "Andy Tian",
    designation: "Full Stack Software Engineer",
    link: "https://www.linkedin.com/in/andytian04/",
    company: "Digitera Interactive",
    image: andy,
  },
];

const projects = [
  {
    name: "Mezzaluna",
    description: "Product-forward landing page for a local culinary brand.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: mezzaluna,
    source_code_link: "https://mezzaluna.lunarissoftware.com/",
    live_link: "https://mezzaluna.lunarissoftware.com/",
  },
  {
    name: "Kova",
    description:
      "High-impact microsite showcasing Lunaris' modern brand refresh.",
    imageBg: "#ffffff",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: kova,
    source_code_link: "https://kova.lunarissoftware.com/",
    live_link: "https://kova.lunarissoftware.com/",
  },
  {
    name: "Sami Kabir",
    description:
      "Personal brand site emphasizing portfolio storytelling, services, and lead capture with refined typography.",
    imageBg: "#ffffff",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: samikabir,
    source_code_link: "https://samikabir.ca/",
    live_link: "https://samikabir.ca/",
  },
  {
    name: "Beyond The Wheel Detailing",
    description:
      "Professional car detailing business offering premium cleaning and restoration services.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: beyondTheWheel,
    source_code_link: "https://www.beyondthewheelcd.ca/",
    live_link: "https://www.beyondthewheelcd.ca/",
  },
  {
    name: "Yellowstone Granite & Quartz",
    description:
      "Marble and granite business specializing in premium stone surfaces and installations.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: yellowstone,
    source_code_link: "https://www.yellowstoneottawa.ca/",
    live_link: "https://www.yellowstoneottawa.ca/",
  },
  {
    name: "Prom Planner",
    description:
      "Prom Planner is designed to be an organizational tool for Prom Committees all over the world. No longer to you have to suffer with spreadsheets and paper, Prom Planner gives you a state-of-the-art digital platform in which to keep all your Prom Committee activities organized, so that your schools big events run that much more smoothly. My role is to lead the development of the web application, as well as the mobile application. I am also responsible for the design and implementation of the database and maintining the codebase.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel Orchid",
        color: "green-text-gradient",
      },
      {
        name: "MVC",
        color: "pink-text-gradient",
      },
      {
        name: "ORM",
        color: "blue-text-gradient",
      },
      {
        name: "REST APIs",
        color: "green-text-gradient",
      },
    ],
    image: pp,
    source_code_link: "https://github.com/fkhan613/PromPlanner",
    live_link: "https://promplanner.app/",
  },
  {
    name: "Omega Academy",
    description:
      ' This platform allows students to register and create an account. Once logged in, the student can choose courses, drop courses, view their courses, and view courses other people are taking. This website is also fully responsive and offers a "forgot password" feature where you will recieve a verification email when attempting to change your password. In addition, it also offers a "remember me for x days" feature utilizing cookies.',
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
      {
        name: "AOS",
        color: "blue-text-gradient",
      },
    ],
    image: omega,
    source_code_link:
      "https://github.com/fkhan613/University-Management-Software-Omega-Academy",
    live_link: "https://omegaacademy.rf.gd/",
  },
  {
    name: "Bus Scheduling Software",
    description:
      "This Bus Scheduling Software can be used for commercial use. You can create/delete routes, add/remove busses from routes, add/remove passengers from buses. You can also view all this information in an organized manner, This software uses a text file database so even if the program is closed, all data will still be saved and can be reloaded.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "OOP",
        color: "green-text-gradient",
      },
      {
        name: "Data Structures",
        color: "pink-text-gradient",
      },
    ],
    image: bsimg,
    source_code_link: "https://github.com/fkhan613/Bus-Scheduling-Software",
    live_link: busSchedule,
  },
];

export { services, technologies, experiences, testimonials, projects };
