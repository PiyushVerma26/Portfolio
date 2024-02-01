import React from "react";
import { MdCastForEducation } from "react-icons/md";
import EducationList from "./EducationList";
import Container from "./Container";
function Eductaion() {
  return (
    <div className="mt-2">
      <h1
        className="font-bold tracking-widest text-2xl pl-2 flex flex-row items-center gap-2 text-blue-950"
        style={{
          fontFamily: " lucky",
        }}
      >
        <MdCastForEducation className="text-3xl text-black" />
        Education
      </h1>
      <Container>
        <EducationList
          detail="Bachelour Of Technology (Computer Science and Engineering)"
          college="Guru Gobind Singh Indraprastha University"
          percent="8.5 cgpa"
          location="Delhi, India"
          date="2019 - 2023"
        />
        <EducationList
          detail="12th Grade Completion"
          college="M.S.M Samta College"
          percent="76 %(pct.)"
          location="Bihar,India"
          date="2017 - 2019"
        />
        <EducationList
          detail="10th Grade Completion"
          college="St. John's Academy"
          percent="9.6 cgpa"
          location="Bihar, India"
          date="2015 - 2017"
        />
      </Container>
    </div>
  );
}

export default Eductaion;
