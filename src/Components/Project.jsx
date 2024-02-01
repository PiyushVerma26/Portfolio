import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProjectHeader from "./ProjectCompo/ProjectHeader";
import NeomorphicBox from "./ProjectCompo/projectBox";

function Project() {
  const repos = useLoaderData();
  console.log(repos);
  return (
    <div className="bg-yellow-50  pb-8">
      <ProjectHeader />
      <p
        className="text-2xl mt-6 md:mt-12 w-[100%] md:w-[70%] text-center rounded-lg mx-auto tracking-widest text-blue-500 bg-black shadow-md md:p-7  p-6"
        style={{ fontFamily: "lucky" }}
      >
        <span className="text-yellow-200 mr-2" style={{ fontSize: "50px" }}>
          My GitHub
        </span>
        {"  "}
        project is like a smooth ride on a tech rollercoaster, where simplicity
        meets excitement, making it a delightful read for all.
      </p>

      <div
        className="grid mx-auto gap-4 w-[80%]"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {repos.map((item) => {
          return <NeomorphicBox name={item.name} link={item.clone_url} />;
        })}
      </div>
    </div>
  );
}

export default Project;
