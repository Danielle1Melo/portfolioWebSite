"use client";

import { TECHNOLOGIES } from "@/lib/data";
import styled from "../../../style/allStyles/sections/skills.module.css";
import Image from "next/image";

export function SkillsSections() {
  return (
    <div className={styled.container}>
      <div className={styled.skills}>
        <p>Skills</p>
        <h3>
          As habilidades, ferramentas e tecnologias que estudo e uso:
        </h3>
      </div>
      <div className={styled.tecnologies}>
        {TECHNOLOGIES.map((tecnologie, idx) => {
          return (
            <div key={idx} className={styled.labelTecnologies}>
                <Image src={tecnologie.logo} alt="" width={60} height={60} />
                <p>{tecnologie.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
