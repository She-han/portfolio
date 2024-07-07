import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

const Contact = () => {
  return (
    <div
      className="relative flex items-center justify-center mt-4 bg-[#232325] py-8"
      id="contact"
    >
      <div className=" mx-auto max-w-[85%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex flex-col justify-around p-6 my-6 bg-gray-800 md:p-10 md:ml-4 rounded-xl "
          >
            <h1 className="text-2xl text-white lg:text-4xl">
              Contact<span>Me</span>
            </h1>
            <p className="my-6 mt-2 text-base text-gray-400">Get in touch</p>

            <div className="flex items-center mt-4 text-gray-400">
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a0aec0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>

              <div className="ml-4 text-sm tracking-wide sm:text-base">
                <p>Shehan Induwara</p>
              </div>
            </div>

            <div className="flex items-center mt-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-8 h-8 md:w-10 md:h-10"
              >
                <path
                  fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="ml-4 text-sm tracking-wide sm:text-base">
                <p>Matara, Sri Lanka</p>
              </div>
            </div>

            <div className="flex items-center mt-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-8 h-8 md:w-10 md:h-10"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <div className="ml-4 text-sm tracking-wide sm:text-base">
                <p>shehangarusinghe@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <form
              action="https://getform.io/f/nbvvjlob"
              method="post"
              className="p-6 flex flex-col justify-center max-w-[700px]"
            >
              <div className="my-3 text-2xl text-gray-300">
                <lable>Message Me</lable>
              </div>

              <div className="flex flex-col">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="px-3 py-3 mt-2 text-white bg-gray-800 border-gray-400 rounded-lg w-100"
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="px-3 py-3 mt-2 text-white bg-gray-800 border-gray-700 rounded-lg w-100"
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="px-3 py-3 mt-2 text-white bg-gray-800 border-gray-700 rounded-lg w-100"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="px-6 py-3 mt-3 text-white bg-purple-600 rounded-lg md:w-32 hover:bg-[#B333D8] active:bg-red-600"
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
