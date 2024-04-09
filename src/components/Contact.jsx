import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { slideIn } from "../utils/motion";
import { sectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
    .send(
      "service_0tm1zgn",
      "template_0g6bs6r",
      {
        from_name: form.name,
        to_name: "farah",
        from_email: form.email,
        to_email: "farah.bassoumi@insat.ucar.tn",
        message: form.message,
      },
      "RGYTk_M6A3fQ-XwBJ"
    )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={`${styles.sectionSubText}`}> Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="m-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name ?"
              type="text"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary outline-none border-none font-medium rounded-lg"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email ?"
              type="email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary outline-none border-none font-medium rounded-lg"
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
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold text-wrap shadow-md shadow-primary rounded-xl "
            type="submit"
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]  "
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default sectionWrapper(Contact, "contact");
