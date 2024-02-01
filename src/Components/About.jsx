import React from "react";
import Profile from "../Images/Profile.png";
// import { FaLocationDot } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Eductaion from "./AboutDetail/Eductaion";
import Skill from "./AboutDetail/Skill";
import Experience from "./AboutDetail/Experience";
import Tools from "./AboutDetail/Tools";

function About() {
  return (
    <div className="overflow-x-hidden">
      <section className="h-56 w-[full]  mx-auto bg-slate-900 flex flex-row justify-center items-center">
        <code
          className="text-white md:text-2xl text-lg text-center md:mt-0 mt-12"
          style={{ fontFamily: "works" }}
        >
          {`
while (alive) {
  eat();
  sleep();
  Code();
  repeat();
}`}
        </code>
      </section>
      <section className="px-4 md:px-32 flex flex-col gap-3 mb-10">
        <div className="flex flex-row items-start justify-start  h-32  md:mt-[-40px]  mt-[-30px]   md:h-40 gap3 md:gap-5">
          <img
            src={Profile}
            alt="Profile"
            className="h-full    bg-slate-500 rounded-2xl"
          />

          <div className=" flex flex-col mt-16 gap-3">
            <p className="text-slate-500 flex flex-row font-light md:text-lg text-[12px]">
              <ImLocation className="md:text-2xl text-sm mx-1 text-black" />
              Delhi ,India
            </p>
            <p className="text-slate-500 flex flex-row font-light md:text-lg text-[11px]">
              <FaLaptopCode className="md:text-2xl text-sm mx-1 text-black" />
              Frontend-Developer
            </p>
          </div>
        </div>
        <p className="text-justify mb-3">
          Hello !👋 I'm Piyush Verma, a dynamic frontend artisan armed with a
          B.Tech in Computer Science and Technology (2023, 8.9 CGPA). 🚀 My
          forte lies in sculpting vibrant and responsive user interfaces using
          HTML, CSS, and JavaScript, with a flair for the React library. 💡
          Devoted to exemplary design and user experience, I assure each project
          not only meets functional criteria but also unveils an exceptional UI.
          🌐 Venturing beyond the frontend domain, I actively contribute to
          full-stack ventures, wielding a robust foundation in Java that
          gracefully extends to Android app craftsmanship. 📚 My tech journey is
          marked by an insatiable quest for knowledge and a dedication to
          staying at the forefront of industry trends. 🛠️ Whether refining pixel
          aesthetics, deciphering intricate algorithms, or architecting scalable
          wonders, I enthusiastically embrace every challenge.
          <br />
          <strong className="text-slate-700 ">
            Let's connect and engineer impactful solutions together! 🚀
          </strong>
        </p>
        <Experience />
        <Skill />
        <Tools />
        <Eductaion />
      </section>
    </div>
  );
}

export default About;
