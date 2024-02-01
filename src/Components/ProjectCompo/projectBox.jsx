import React from "react";
import { FaGithubAlt } from "react-icons/fa";

const NeomorphicBox = ({ name, link }) => {
  const redirectToLink = () => {
    window.location.href = link;
  };

  return (
    <div className="bg-gray-100 p-6 mt-10  rounded-lg shadow-neumorphic flex flex-col items-center justify-center">
      <FaGithubAlt className="text-red-900" style={{ fontSize: "50px" }} />

      <h4 className="text-lg font-bold m-2 break-words">{name}</h4>
      <button
        className="bg-black font-bold tracking-wider text-white px-4 py-2 rounded-md hover:bg-pink-800"
        onClick={redirectToLink}
      >
        Clone
      </button>
    </div>
  );
};

export default NeomorphicBox;
