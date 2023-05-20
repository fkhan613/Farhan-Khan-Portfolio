import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setloading] = useState(false);
  const [counter, setCounter] = useState(60);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    //make sure nothing is blank in form 
    if (form.name === "" || form.email === "" || form.message === "") {
      setloading(false);
      toast.error("Please fill all the fields.");
      return;
    }

    //disable submit button for 60 seconds
    const submitBtn = formRef.current.lastChild;
    submitBtn.disabled = true;
    submitBtn.style.cursor = "not-allowed";
    submitBtn.style.opacity = "0.5";
    submitBtn.innerText = "Wait 2 minutes to send again";

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.style.cursor = "pointer";
      submitBtn.style.opacity = "1";
    }, 120000);

    emailjs
      .send(
        "service_ktrlyi1",
        "template_om7d8ct",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
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

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
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
