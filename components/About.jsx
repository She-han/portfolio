import React from "react";
import aboutme from "../assets/aboutme.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

const About = () => {
  return (
    <div className="z-[10] py-10 text-white bg-[#232325] h-auto" id="about">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="flex flex-col-reverse items-center px-10 md:px-20 mx-auto max-w-[1400px] sm:flex-row md:gap-6"
      >
        <div>
          <div className="w-[280px] h-full">
            <img
              src={aboutme}
              alt="propic"
              className="object-cover rounded-xl h-[400px] filter grayscale brightness-50 border-solid border-2 border-white"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="my-4 text-gray-300 ">
              <h3 className="mb-8 text-2xl font-semibold lg:text-4xl">
                About<span className="primary-text">Me</span>
              </h3>
              <p className="w-[100%] mx-auto leading-7 text-justify ">
                A Creative, Passionate, Organized, Flexible well Disciplined,
                and people-oriented Computer Science Undergraduate who is
                willing to learn and willing to help people to achieve
                organizational goals. As an undergraduate, I'm able to work
                independently in busy environments and also within a team
                setting. I am truly confident about my technical skills,
                artifice and currently looking for an opportunity to utilize my
                skills while succeeding in the projects of the organization that
                I work for.
              </p>
            </div>

            <div className="grid justify-center grid-cols-1 gap-2 my-12 place-items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 md:gap-4 lg:gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-[#333333]/60 p-2 rounded-lg w-[200px]"
              >
                <h3 className="text-2xl font-semibold text-white md:text-4xl float">
                  24
                  <span className="text-purple-600">+</span>
                </h3>
                <p className="text-xs text-purple-600 md:text-base">Projects</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-[#333333]/60 p-2 rounded-lg w-[200px]"
              >
                <h3 className="text-2xl font-semibold text-white md:text-4xl float">
                  2<span className="text-purple-600">+</span>
                </h3>
                <p>
                  <span className="text-xs text-purple-600 md:text-base">
                    Year Experience
                  </span>
                </p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-[#333333]/60 p-2 rounded-lg w-[200px]"
              >
                <h3 className="text-2xl font-semibold text-white md:text-4xl float">
                  13
                  <span className="text-purple-600">+</span>
                </h3>
                <p>
                  <span className="text-xs text-purple-600 md:text-base">
                    Clients
                  </span>
                </p>
              </motion.button>

              <div className="relative inline-flex mt-7 group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 h-[52px] w-[202px]"></div>
                <a
                  href="https://wa.me/+94717393080"
                  title="Download CV"
                  role="button"
                  className="w-[200px] h-[50px] relative inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-center justify-center"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
