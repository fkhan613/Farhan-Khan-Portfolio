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
  live,
  mongodb,
  git,
  digitera,
  carrent,
  java,
  lorchid,
  laravel,
  mysql,
  php,
  python,
  jobit,
  tripguide,
  promplanner,
} from "../assets";

export const navLinks = [
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
    title: "Lead Software Engineer",
    icon: web,
  },
  {
    title: "Technical Lead",
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
    title: "Co-Founder & Lead Software Engineer",
    company_name: "Prom Planner by Digitera",
    link: "https://promplanner.app/",
    icon: promplanner,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    title: "Lead Full Stack Software Engineer",
    company_name: "Digitera Interactive",
    link: "https://digitalmarketingplus.com/",
    icon: digitera,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     'Farhan is an extremely bright and talented computer science prodigy. He has always demonstrated an incredible keenness for problem solving, logical thinking, and application development. He is also an extremely quick and efficient learner, having learned and properly understood the process of creating a fully functional web application in under 5 months. Apart from that, he excels at object oriented programming, as well as all logic oriented sciences. He is extremely passionate about what he does, never gives up, and has an incredibly positive and enthusiastic work ethic, which is one of my favorite traits about him. He is always curious to learn new things and expand his skills and knowledge in any possible way, as he has demonstrated by taking on various personal projects in his free time, in all of which he has learned new concepts and design strategies. He is extremely determined to constantly improve himself, and, in my opinion, is the personification of "the only person you should strive to be better than is the person you were yesterday" demonstrated by his leap into multi-level secure programming upon discovery of a security vulnerability in one of his older projects. It is with great pleasure and enthusiasm that I recommend Farhan to you. He is in every way unique, and will be most certainly be an invaluable asset to those he works both for and alongside.',
  //   name: "Zade Ammar",
  //   designation: "Cyber Security Engineer",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/men/4.jpg",
  // },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Blank",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/fkhan613",
    live_link: "",
  },
  {
    name: "Blank",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/fkhan613",
    live_link: "",
  },
  {
    name: "Blank",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/fkhan613",
    live_link: "",
  },
  {
    name: "Blank",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/fkhan613",
    live_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
