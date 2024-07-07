import React from "react";
import ui from "../assets/ui1.png";
import app from "../assets/app2.png";
import design from "../assets/design.jpg";
import web from "../assets/webd.png";
import { fadeIn } from "../constants/variants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="pt-6 pb-12 mx-auto " id="services">
      <div className="flex items-center justify-between mt-5 mb-10 mx-auto max-w-[1400px] px-10 md:px-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-white lg:text-4xl">
            My<span className="primary-color">Services</span>
          </h2>
          <p className="text-gray-500">These are services I provide.</p>
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="flex items-center justify-center h-full "
      >
        <div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 max-w-[85%]">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div class="h-96 w-72 ">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={design}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-lg md:text-xl lg:text-2xl font-bold text-white">
                Graphics
              </h1>
              <p class="mb-8 text-md  text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                I provide expert graphic design solutions tailored to your
                unique needs, ensuring your brand stands out with creativity and
                professionalism
              </p>
            </div>
          </div>

          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={ui}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-lg md:text-xl lg:text-2xl font-bold text-white">
                UI Design
              </h1>
              <p class="mb-2 text-md  text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                I adept at crafting visually stunning interfaces that seamlessly
                blend aesthetics with intuitive user interaction, enhancing
                digital experiences.
              </p>
            </div>
          </div>

          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={app}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-lg md:text-xl lg:text-2xl font-bold text-white">
                App Develop
              </h1>
              <p class="mb-2 text-md  text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                I dedicated to building innovative and user-centric
                applications, leveraging cutting-edge technologies to deliver
                seamless performance across platforms.
              </p>
            </div>
          </div>

          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={web}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-lg md:text-xl lg:text-2xl font-bold text-white">
                Web Develop
              </h1>
              <p class="mb-12 text-md  text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                I create responsive and dynamic websites that marry form with
                function, ensuring an engaging user experience.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
