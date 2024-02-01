import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
function ExperienceList({ detail, college, percent, location, date }) {
  return (
    <div className="mt-3">
      <Title detail={detail} />
      <div className="flex md:flex-row justify-between md:items-center flex-col">
        <SubTitle sub={college} />
        <h1 className="font-bold mr-12">{percent}</h1>
      </div>
      <SubTitle sub={location} />
    </div>
  );
}

export default ExperienceList;
