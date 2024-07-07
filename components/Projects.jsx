import React from "react";
import proj1 from "../assets/pro1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import { fadeIn } from "../constants/variants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="py-6 mx-auto " id="projects">
      <div className="px-10 mx-auto max-w-[1400px] md:px-20 mb-10">
        <div className="flex items-center justify-between mt-5 mb-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-white lg:text-4xl">
              My<span className="primary-color">Projects</span>
            </h2>
            <p className="text-gray-500">
              These are my latest projects for different clients.
            </p>
          </div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 md:gap-12 lg:gap-12"
        >
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl ">
            <div class="h-48 md:h-80 ">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 "
                src={proj1}
                alt="project1"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-800 group-hover:from-black group-hover:via-black/90 group-hover:to-black ">
              <div class="absolute inset-0 flex translate-y-[65%] md:translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 ">
                <h1 class="mb-2 font-dmserif text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow group-hover:text-purple-600">
                  Delivery web site
                </h1>
                <p class="mb-4 text-xs md:text-base text-gray-400 opacity-0 duration-300 group-hover:opacity-100">
                  Me and my team develop a website for "FLASH" delivery services
                  to enhance their productivity.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  class="rounded-full bg-gray-600 hover:bg-purple-600 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60 opacity-0 group-hover:opacity-100"
                >
                  <a
                    href="https://mini-project-ruhuna.000webhostapp.com/"
                    role="button"
                  >
                    Take a look
                  </a>
                </motion.button>
              </div>
            </div>
          </div>

          <div class="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl ">
            <div class="h-48 md:h-80 ">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 "
                src={proj2}
                alt="project1"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-800 group-hover:from-black group-hover:via-black/90 group-hover:to-black ">
              <div class="absolute inset-0 flex translate-y-[65%] md:translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 ">
                <h1 class="mb-2 font-dmserif text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow group-hover:text-purple-600">
                  Project 2
                </h1>
                <p class="mb-4 text-xs md:text-base text-gray-400 opacity-0 duration-300 group-hover:opacity-100">
                  Comming soon..!
                  <p>.</p>
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  class="rounded-full bg-gray-600 hover:bg-purple-600 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60 opacity-0 group-hover:opacity-100"
                >
                  <a
                    href="#home"
                    role="button"
                  >
                    Take a look
                  </a>
                </motion.button>
              </div>
            </div>
          </div>

          <div class="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl ">
            <div class="h-48 md:h-80 ">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 "
                src={proj3}
                alt="project1"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-800 group-hover:from-black group-hover:via-black/90 group-hover:to-black ">
              <div class="absolute inset-0 flex translate-y-[65%] md:translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 ">
                <h1 class="mb-2 font-dmserif text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow group-hover:text-purple-600">
                  Project 3
                </h1>
                <p class="mb-4 text-xs md:text-base text-gray-400 opacity-0 duration-300 group-hover:opacity-100">
                  Comming soon..!
                  <p>.</p>
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  class="rounded-full bg-gray-600 hover:bg-purple-600 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60 opacity-0 group-hover:opacity-100"
                >
                  <a
                    href="#home"
                    role="button"
                  >
                    Take a look
                  </a>
                </motion.button>
              </div>
            </div>
          </div>

          <div class="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl ">
            <div class="h-48 md:h-80 ">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 "
                src={proj4}
                alt="project1"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-800 group-hover:from-black group-hover:via-black/90 group-hover:to-black ">
              <div class="absolute inset-0 flex translate-y-[65%] md:translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 ">
                <h1 class="mb-2 font-dmserif text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow group-hover:text-purple-600">
                  Project 4
                </h1>
                <p class="mb-4 text-xs md:text-base text-gray-400 opacity-0 duration-300 group-hover:opacity-100">
                  Comming soon..!
                  <p>.</p>
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  class="rounded-full bg-gray-600 hover:bg-purple-600 py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60 opacity-0 group-hover:opacity-100"
                >
                  <a
                    href="#home"
                    role="button"
                  >
                    Take a look
                  </a>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
