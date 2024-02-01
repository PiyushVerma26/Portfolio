import React from "react";
import Container from "./Container";
import { GiSkills } from "react-icons/gi";
import { TfiHtml5 } from "react-icons/tfi";
import SkillToolConatiner from "./SkillToolConatiner";
import { SiCss3, SiSemanticuireact, SiTailwindcss } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandJavascript, TbBrandRedux } from "react-icons/tb";
import { LiaJava, LiaPoopSolid } from "react-icons/lia";

function Skill() {
  return (
    <div className="mt-3 mb-2">
      <h1
        className="font-bold tracking-widest text-2xl pl-2 flex flex-row items-center gap-2 text-blue-950"
        style={{
          fontFamily: " lucky",
        }}
      >
        <GiSkills className="text-3xl text-black" /> Skills
      </h1>

      <Container>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          <SkillToolConatiner>
            <TfiHtml5 className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Html</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <SiCss3 className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Css</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <TbBrandJavascript className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">JavaScript</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <LiaJava className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Java</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <SiSemanticuireact className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">React Js</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <TbBrandRedux className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Redux</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <RiBootstrapLine className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Bootstrap</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <SiTailwindcss className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">Tailwind</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <BsFiletypeXml className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">XML</p>
          </SkillToolConatiner>
          <SkillToolConatiner>
            <LiaPoopSolid className=" text-yellow-500  text-3xl" />
            <p className="font-bold text-2xl ">OOPS</p>
          </SkillToolConatiner>
        </div>
      </Container>
    </div>
  );
}

export default Skill;
