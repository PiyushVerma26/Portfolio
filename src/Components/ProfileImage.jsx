import React from "react";
import one from "../Images/one.png";
import { FaFileDownload } from "react-icons/fa";

import { Link } from "react-router-dom";

function ProfileImage() {
  return (
    <div className="w-[96%] md:w-[70%] text-white mt-16 md:mt-4 flex flex-col justify-end md:ml-12 md:mr-8 mx-auto relative">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgb(247, 247, 1)" offset="0%"></stop>
            <stop id="stop2" stopColor="rgb(247, 247, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>

        <mask id="mask1" mask-type="alpha">
          <path
            fill="white"
            d="M20.6,-35C27.5,-31.8,34.3,-27.8,37.6,-21.8C40.9,-15.9,40.5,-7.9,40.3,-0.2C40,7.6,39.8,15.2,36,20.3C32.3,25.4,24.9,27.9,18.3,31.9C11.7,35.8,5.9,41.1,0,41C-5.8,41,-11.6,35.6,-18.4,31.7C-25.1,27.9,-32.8,25.6,-36.5,20.6C-40.2,15.6,-39.8,7.8,-38.4,0.8C-36.9,-6.1,-34.4,-12.2,-30.5,-17C-26.7,-21.8,-21.6,-25.2,-16.3,-29.3C-11,-33.4,-5.5,-38.1,0.7,-39.3C6.9,-40.5,13.8,-38.1,20.6,-35Z"
            transform="translate(50 50)"
          />
        </mask>

        <g mask="url(#mask1)">
          <path
            fill="url(#sw-gradient)"
            d="M20.6,-35C27.5,-31.8,34.3,-27.8,37.6,-21.8C40.9,-15.9,40.5,-7.9,40.3,-0.2C40,7.6,39.8,15.2,36,20.3C32.3,25.4,24.9,27.9,18.3,31.9C11.7,35.8,5.9,41.1,0,41C-5.8,41,-11.6,35.6,-18.4,31.7C-25.1,27.9,-32.8,25.6,-36.5,20.6C-40.2,15.6,-39.8,7.8,-38.4,0.8C-36.9,-6.1,-34.4,-12.2,-30.5,-17C-26.7,-21.8,-21.6,-25.2,-16.3,-29.3C-11,-33.4,-5.5,-38.1,0.7,-39.3C6.9,-40.5,13.8,-38.1,20.6,-35Z"
            transform="translate(50 50)"
          />
          <image href={one} className="h-[80%] w-full" x="1" y="11" />
        </g>
      </svg>
    </div>
  );
}

export default ProfileImage;
