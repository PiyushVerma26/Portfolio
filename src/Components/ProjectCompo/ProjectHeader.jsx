import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ProjectHeader() {
  const [profile, setprofile] = useState([]);

  const accessToken =
    "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";

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/PiyushVerma26",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let result = await response.json();
      setprofile(result);
    } catch (error) {
      console.error("Error fetching data from GitHub API:", error.message);
      throw error; // Rethrow the error for handling at a higher level if needed
    }
  };

  fetchData();

  return (
    <div className=" h-auto pt-20 md:mt-0 md:h-40 w-full bg-slate-800 flex flex-col md:flex-row items-center p-2 md:p-9 md:justify-evenly justify-center   text-white">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <FaGithub className=" text-yellow-300" style={{ fontSize: "80px" }} />
        <h2
          className="tracking-widest text-white shadow-xl"
          style={{ fontFamily: "lucky" }}
        >
          {profile.name}
        </h2>
      </div>

      <div>
        <p
          className="tracking-normal sm:tracking-wider"
          style={{ fontFamily: "ruby" }}
        >
          Github :
          <Link
            to="https://github.com/PiyushVerma26"
            className="text-blue-500 ml-3 hover:cursor-grabbing2"
          >
            {`https://github.com/PiyushVerma26`}
          </Link>
        </p>
        <p
          className="tracking-widest text-amber-300"
          style={{ fontFamily: "ruby" }}
        >
          <span className="text-white">Username :</span> {profile.login}
        </p>
        <div className="flex flex-row justify-between gap-24 items-center flex-1 w-full">
          <h3>
            <span
              className="text-red-300 md:tracking-widest"
              style={{ fontFamily: "lucky" }}
            >
              Followers :
            </span>{" "}
            {profile.followers}
          </h3>
          <h3>
            {" "}
            <span
              className="text-red-300 md:tracking-widest"
              style={{ fontFamily: "lucky" }}
            >
              Following :
            </span>{" "}
            {profile.followers}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
