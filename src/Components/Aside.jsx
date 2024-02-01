import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { MdOutlineContactMail } from "react-icons/md";

function Aside({ toggleSidebar }) {
  return (
    <aside className="md:hidden fixed flex flex-col justify-center items-center  h-screen  w-screen bg-black z-10">
      <div className="flex flex-col justify-center gap-10 items-start h-full  ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-2xl flex flex-row items-center ${
              isActive ? "text-blue-500" : "text-white"
            }`
          }
          onClick={toggleSidebar}
        >
          <FaHome className="mr-2 text-2xl" />
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            ` justify-start flex text-2xl flex-row items-center ${
              isActive ? "text-blue-500" : "text-white"
            }`
          }
          onClick={toggleSidebar}
        >
          <FcAbout className="mr-2 text-2xl text-white " />
          About
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            ` text-2xl flex flex-row items-center ${
              isActive ? "text-blue-500" : "text-white"
            }`
          }
          onClick={toggleSidebar}
        >
          <GrProjects className="mr-2 text-xl" />
          Projects
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            ` text-2xl flex flex-row items-center ${
              isActive ? "text-blue-500" : "text-white"
            }`
          }
          onClick={toggleSidebar}
        >
          <MdOutlineContactMail className="mr-2 text-2xl" />
          Contacts
        </NavLink>
      </div>
    </aside>
  );
}

export default Aside;
