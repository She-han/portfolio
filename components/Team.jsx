import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

import me from "../assets/tme.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Autoplay } from "swiper/modules";

const Team = () => {
  return (
    <div className=" bg-[#232325] py-12 " id="team">
      <div className="flex flex-col items-center justify-center mt-5 mb-10 mx-auto max-w-[1400px] px-10 md:px-20 text-center">
        <h2 className="text-2xl text-white lg:text-4xl">
          My<span className="primary-color">Team</span>
        </h2>
        <p className="mt-2 text-gray-400">Who with me</p>
      </div>

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="flex flex-col items-center justify-between"
      >
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[FreeMode, Autoplay]}
          className="max-w-[81%] px-20 "
        >
          <div>
            <SwiperSlide>
              <div className="flex items-center justify-center max-w-5xl gap-8 mx-auto ">
                <div className="p-8 bg-gray-800 cursor-pointer group rounded-xl hover:bg-purple-600">
                  <div className="duration-300 group-hover:scale-110 ">
                    <img src={me} alt="" className="mx-auto " />
                    <h3 className="mt-4 text-xl text-center text-gray-300 group-hover:text-gray-900">
                      Shehan Induwara
                    </h3>
                    <p className="mt-1 text-center text-gray-400 opacity-60 group-hover:text-gray-900">
                      Frontend Developer
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-3 text-2xl text-purple-600 md:gap-4 lg:gap-8 lg:text-3xl group-hover:text-gray-900">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                          role="button"
                        >
                          <AiFillLinkedin />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a href="https://github.com/She-han" role="button">
                          {" "}
                          <AiFillGithub />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.instagram.com/shehan_indu_/"
                          role="button"
                        >
                          <AiFillInstagram />
                        </a>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center max-w-5xl gap-8 mx-auto ">
                <div className="p-8 bg-gray-800 cursor-pointer group rounded-xl hover:bg-purple-600">
                  <div className="duration-300 group-hover:scale-110 ">
                    <img src={me} alt="" className="mx-auto " />
                    <h3 className="mt-4 text-xl text-center text-gray-300 group-hover:text-gray-900">
                      Shehan Induwara
                    </h3>
                    <p className="mt-1 text-center text-gray-400 opacity-60 group-hover:text-gray-900">
                      Backend Developer
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-3 text-2xl text-purple-600 md:gap-4 lg:gap-8 lg:text-3xl group-hover:text-gray-900">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                          role="button"
                        >
                          <AiFillLinkedin />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a href="https://github.com/She-han" role="button">
                          {" "}
                          <AiFillGithub />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.instagram.com/shehan_indu_/"
                          role="button"
                        >
                          <AiFillInstagram />
                        </a>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center max-w-5xl gap-8 mx-auto ">
                <div className="p-8 bg-gray-800 cursor-pointer group rounded-xl hover:bg-purple-600">
                  <div className="duration-300 group-hover:scale-110 ">
                    <img src={me} alt="" className="mx-auto " />
                    <h3 className="mt-4 text-xl text-center text-gray-300 group-hover:text-gray-900">
                      Shehan Induwara
                    </h3>
                    <p className="mt-1 text-center text-gray-400 opacity-60 group-hover:text-gray-900">
                      Q A Engineer
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-3 text-2xl text-purple-600 md:gap-4 lg:gap-8 lg:text-3xl group-hover:text-gray-900">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                          role="button"
                        >
                          <AiFillLinkedin />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a href="https://github.com/She-han" role="button">
                          {" "}
                          <AiFillGithub />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.instagram.com/shehan_indu_/"
                          role="button"
                        >
                          <AiFillInstagram />
                        </a>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center max-w-5xl gap-8 mx-auto ">
                <div className="p-8 bg-gray-800 cursor-pointer group rounded-xl hover:bg-purple-600">
                  <div className="duration-300 group-hover:scale-110 ">
                    <img src={me} alt="" className="mx-auto " />
                    <h3 className="mt-4 text-xl text-center text-gray-300 group-hover:text-gray-900">
                      Shehan Induwara
                    </h3>
                    <p className="mt-1 text-center text-gray-400 opacity-60 group-hover:text-gray-900">
                      Designer
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-3 text-2xl text-purple-600 md:gap-4 lg:gap-8 lg:text-3xl group-hover:text-gray-900">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                          role="button"
                        >
                          <AiFillLinkedin />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a href="https://github.com/She-han" role="button">
                          {" "}
                          <AiFillGithub />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.instagram.com/shehan_indu_/"
                          role="button"
                        >
                          <AiFillInstagram />
                        </a>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center max-w-5xl gap-8 mx-auto ">
                <div className="p-8 bg-gray-800 cursor-pointer group rounded-xl hover:bg-purple-600">
                  <div className="duration-300 group-hover:scale-110 ">
                    <img src={me} alt="" className="mx-auto " />
                    <h3 className="mt-4 text-xl text-center text-gray-300 group-hover:text-gray-900">
                      Shehan Induwara
                    </h3>
                    <p className="mt-1 text-center text-gray-400 opacity-60 group-hover:text-gray-900">
                      Full Stack Developer
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-3 text-2xl text-purple-600 md:gap-4 lg:gap-8 lg:text-3xl group-hover:text-gray-900">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                          role="button"
                        >
                          <AiFillLinkedin />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a href="https://github.com/She-han" role="button">
                          {" "}
                          <AiFillGithub />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.instagram.com/shehan_indu_/"
                          role="button"
                        >
                          <AiFillInstagram />
                        </a>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center max-w-5xl gap-8 mx-auto ">
                <div className="p-8 bg-gray-800 cursor-pointer group rounded-xl hover:bg-purple-600">
                  <div className="duration-300 group-hover:scale-110 ">
                    <img src={me} alt="" className="mx-auto " />
                    <h3 className="mt-4 text-xl text-center text-gray-300 group-hover:text-gray-900">
                      Shehan Induwara
                    </h3>
                    <p className="mt-1 text-center text-gray-400 opacity-60 group-hover:text-gray-900">
                      Frontend Developer
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-3 text-2xl text-purple-600 md:gap-4 lg:gap-8 lg:text-3xl group-hover:text-gray-900">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                          role="button"
                        >
                          <AiFillLinkedin />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a href="https://github.com/She-han" role="button">
                          {" "}
                          <AiFillGithub />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.instagram.com/shehan_indu_/"
                          role="button"
                        >
                          <AiFillInstagram />
                        </a>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center justify-center max-w-5xl gap-8 mx-auto ">
                <div className="p-8 bg-gray-800 cursor-pointer group rounded-xl hover:bg-purple-600">
                  <div className="duration-300 group-hover:scale-110 ">
                    <img src={me} alt="" className="mx-auto " />
                    <h3 className="mt-4 text-xl text-center text-gray-300 group-hover:text-gray-900">
                      Shehan Induwara
                    </h3>
                    <p className="mt-1 text-center text-gray-400 opacity-60 group-hover:text-gray-900">
                      SEO Specialist
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-3 text-2xl text-purple-600 md:gap-4 lg:gap-8 lg:text-3xl group-hover:text-gray-900">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                          role="button"
                        >
                          <AiFillLinkedin />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a href="https://github.com/She-han" role="button">
                          {" "}
                          <AiFillGithub />
                        </a>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <a
                          href="https://www.instagram.com/shehan_indu_/"
                          role="button"
                        >
                          <AiFillInstagram />
                        </a>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Team;
