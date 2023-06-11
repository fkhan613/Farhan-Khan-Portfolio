import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ToastContainer, toast } from "react-toastify";
import { setCookie, getCookie, checkCookie } from "../utils/cookies";
import "react-toastify/dist/ReactToastify.css";
import '../App.css'

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    //check if user has already contacted me
    if(checkCookie("shbf_HijKls4763235")){
      setloading(false);
      toast.error("You have already contacted me. Please wait 1 day before sending again.");
      return;
    }

    //make sure nothing is blank in form 
    if (form.name === "" || form.email === "" || form.message === "") {
      setloading(false);
      toast.error("Please fill all the fields.");
      return;
    }

    emailjs
      .send(
        "service_ktrlyi1",
        "template_om7d8ct",
        {
          from_name: form.name,
          from_email: form.email,
          message: `${form.message} \n\n\ From: ${form.name} \n\n\ Email: ${form.email}`,
          to_name: "Farhan",
          to_email: "farhan.work435@gmail.com",
        },
        "lQ78q1t1lWwmS9R_e"
      )
      .then(
        () => {
          setloading(false);
          toast.success(
            "Message sent succesfully! I will get back to you soon."
          );
          setform({
            name: "",
            email: "",
            message: "",
          });
          setCookie("shbf_HijKls4763235", true, 1);
        },
        (error) => {
          setloading(false);
          toast.error("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="johndoe@gmail.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button class="button" type="submit">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telegram"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
              </svg>
            </div>
            <p>{loading ? 'Sending...' : "Send" }</p>
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
