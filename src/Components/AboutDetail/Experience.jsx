import React from "react";
import { SiExpertsexchange } from "react-icons/si";
import ExperienceList from "./ExperienceList";
import Container from "./Container";

function Experience() {
  return (
    <div className="mt-2">
      <h1
        className="font-bold tracking-widest text-2xl pl-2 flex flex-row items-center gap-2 text-blue-950"
        style={{
          fontFamily: " lucky",
        }}
      >
        <SiExpertsexchange className="text-3xl text-black" /> Experience
      </h1>
      <Container>
        <ExperienceList
          detail="Frontend Developer"
          college="ETS Networks Pvt Ltd."
          percent="11/2023 - present"
          location="Noida,India"
          date=""
        />
        <ExperienceList
          detail="Android Application Developer Intern"
          college="Analysed"
          percent="09/2022 - 12/2022"
          location="Noida,India"
          date=""
        />
        <ExperienceList
          detail="Android Application Developer Intern"
          college="Exposys Data Labs"
          percent="08/2023 - 09/2022"
          location="Banglore,India"
          date=""
        />
      </Container>
    </div>
  );
}

export default Experience;
