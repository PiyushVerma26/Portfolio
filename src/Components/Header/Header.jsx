import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { CgMenuRound } from "react-icons/cg";
import { MdOutlineContactMail } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import Aside from "../Aside";

function Header() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((isSidebarVisible) => !isSidebarVisible);
  };

  return (
    <>
      <header className="bg-black h-16 w-full flex flex-row justify-between items-center md:px-16 px-3 z-50 fixed md:relative mx-auto">
        <ul className="flex-1">
          <p className="text-blue-200 text-xl italic tracking-widest border-2 border-white p-1 inline">
            VermaScripts
          </p>
        </ul>
        <ul className="md:flex flex-row flex-1 justify-around items-center hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-xl font-bold  flex flex-row items-center ${
                isActive ? "text-yellow-400" : "text-white"
              }`
            }
          >
            <FaHome className="mr-2 text-xl" />
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-xl font-bold flex flex-row items-center ${
                isActive ? "text-yellow-400" : "text-white"
              }`
            }
          >
            <FcAbout className="mr-2 text-xl text-white" />
            About
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `text-xl font-bold flex flex-row items-center ${
                isActive ? "text-yellow-400" : "text-white"
              }`
            }
          >
            <GrProjects className="mr-2 text-lg" />
            Projects
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `text-xl font-bold flex flex-row items-center ${
                isActive ? "text-yellow-400" : "text-white"
              }`
            }
          >
            <MdOutlineContactMail className="mr-2 text-xl" />
            Contacts
          </NavLink>
        </ul>
        {isSidebarVisible ? (
          <IoMdCloseCircle
            className="text-yellow-300 md:hidden"
            style={{ fontSize: "40px" }}
            onClick={toggleSidebar}
          />
        ) : (
          <CgMenuRound
            className="text-yellow-300 md:hidden"
            style={{ fontSize: "40px" }}
            onClick={toggleSidebar}
          />
        )}
      </header>

      {isSidebarVisible && <Aside toggleSidebar={toggleSidebar} />}
    </>
  );
}

export default Header;
