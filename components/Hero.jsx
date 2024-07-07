import React from "react";
import me from "../assets/me2.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

const Hero = () => {
  return (
    <div
      className="px-10 md:px-20 my-7 sm:my-0 max-w-[1400px]  mx-auto flex flex-col-reverse sm:flex-row justify-between"
      id="home"
    >
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex-col mx-auto my-auto md:mx-0"
      >
        <p className="mt-4 text-xl font-bold text-gray-200 md:text-4xl sm:text-3xl">
          Hi! I am Shehan,
        </p>
        <h1 className="text-4xl font-bold md:text-6xl sm:text-5xl lg:text-7xl md:py-6">
          <TypeAnimation
            sequence={[
              "Developer",
              1000,
              "Designer",
              1000,
              "Consultant",
              1000,
              "Freelancer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div className="flex justify-none">
          <p className="text-2xl text-gray-500 md:text-5xl sm:text-4xl fond-bold">
            With 2 Year Experience
          </p>
        </div>

        <div className="flex justify-start gap-8 text-3xl text-purple-600 md:gap-12 lg:gap-16 md:text-4xl lg:text-5xl my-7">
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/" role="button">
              <AiFillLinkedin />
            </a>
          </motion.button>

          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="https://github.com/She-han" role="button">
              {" "}
              <AiFillGithub />
            </a>
          </motion.button>

          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="https://www.instagram.com/shehan_indu_/" role="button">
              <AiFillInstagram />
            </a>
          </motion.button>
        </div>

        <div className="relative inline-flex my-2 md:my-4 group">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="https://wa.me/+94717393080"
            title="Contact Me"
            role="button"
            className="w-[180px] h-[60px] relative inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-center justify-center"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="my-auto"
      >
        <img
          className="w-[350px] sm:w-[450px] md:w-[500px] mx-auto h-auto"
          src={me}
          alt="profic"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
