import React from "react";
import {
  SiKingstontechnology,
  SiAndroidstudio,
  SiPostman,
  SiEclipseide,
} from "react-icons/si";
import { VscTerminalLinux } from "react-icons/vsc";
import Container from "./Container";
import SkillToolConatiner from "./SkillToolConatiner";
import { TbBrandVscode } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import { GiMagicHat } from "react-icons/gi";
function Tools() {
  return (
    <div className="mt-2">
      <h1
        className="font-bold tracking-widest text-2xl pl-2 flex flex-row items-center gap-2 text-blue-950"
        style={{
          fontFamily: " lucky",
        }}
      >
        <SiKingstontechnology className="text-3xl text-black" /> Tools
      </h1>
      <Container>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          <SkillToolConatiner>
            <TbBrandVscode className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">VsCode</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <FaGithubSquare className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Git</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <SiAndroidstudio className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Android Studio</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <SiPostman className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Postman</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <SiEclipseide className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Eclipse</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <GiMagicHat className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Chatgpt</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <VscTerminalLinux className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Linux</p>
          </SkillToolConatiner>
        </div>
      </Container>
    </div>
  );
}

export default Tools;
