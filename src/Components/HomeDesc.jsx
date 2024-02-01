import React from "react";
import { MdWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
import Social from "./Social";

function HomeDesc() {
  return (
    <div className="w-full md:gap-3 gap-2 text-white flex flex-col justify-end mb-5 items-start md:ml-16">
      <div className="flex flex-col md:flex-row gap-2">
        <h3 className="text-2xl md:text-3xl flex items-center gap-2 font-bold md:mt-1 mt-3 ">
          Hello,
          <MdWavingHand className="text-yellow-400 text-2xl md:text-3xl" />
        </h3>
        <h1 className="text-2xl md:text-3xl tracking-wide font-bold">
          I'm Piyush Verma
        </h1>
      </div>
      <h3
        className="text-blue-800 font-bold text-xl md:text-2xl"
        style={{ marginTop: "-5px" }}
      >
        Frontend Developer
      </h3>
      <p className="mt-4 text-base md:text-lg tracking-widest text-justify ">
        Embrace the elegance of code, where pixels dance to the rhythm of logic,
        and innovation unfolds in every keystroke. Here, our canvas is the
        browser, our brushes are languages, and the masterpiece is a seamless
        user experience. Dive into the realm where creativity meets technology,
        and let your curiosity navigate this ever-evolving digital frontier.
        Happy exploring!
      </p>
      <div className="mt-5 flex flex-row gap-5">
        <button>
          <Link
            to=""
            className="text-black font-bold tracking-wide bg-blue-300 px-6 py-2 rounded-lg"
          >
            Hire me
          </Link>
        </button>
        <button>
          <Link
            to="contact"
            className="text-blue-300 font-bold tracking-wide bg-black border border-1 border-blue-300 px-5 py-2 rounded-lg mt-2 md:mt-0"
          >
            Let's Talk
          </Link>
        </button>
      </div>

      <Social />
    </div>
  );
}

export default HomeDesc;
