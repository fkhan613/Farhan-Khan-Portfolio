import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, linkedin, github } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 scale-105 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Farhan Khan &nbsp;
            <span className="sm:block hidden">
              |&nbsp; Founder & Software Engineer
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className=" hover:text-white cursor-pointer">
            <a href="https://www.linkedin.com/in/farhan-khan-/" target="_blank">
              <img src={linkedin} className="w-8" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://github.com/fkhan613" target="_blank">
              <img src={github} className="w-8" />
            </a>
          </li>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-white underline underline-offset-8 scale-110"
                  : "text-secondary transition-all ease-in-out hover:underline underline-offset-8  duration-600 hover:scale-110"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white scale-110"
                      : "text-secondary transition-all ease-in-out"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <div className="flex flex-row gap-5">

              <li className=" hover:text-white cursor-pointer ">
                <a
                  href="https://www.linkedin.com/in/farhan-khan-/"
                  target="_blank"
                >
                  <img src={linkedin} className="w-8" />
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="https://github.com/fkhan613" target="_blank" >
                  <img src={github} className="w-8" />
                </a>
              </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
