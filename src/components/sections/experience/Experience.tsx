"use client";

import { EXPERIENCES } from "@/lib/data";
import styled from "../../../style/allStyles/sections/experience.module.css";
import Image from "next/image";
import { LOGO } from "@/utils/logos";

export function ExperienceSection() {
  return (
    <div className={styled.container} id="experience">
      <div className={styled.experience}>
        <p>Experience</p>
        <h3>Aqui está um rápido resumo da minha experiência mais recente:</h3>
      </div>

      <div>
        {EXPERIENCES.map((experience, idx) => {
          return (
            <div key={idx} className={styled.summary}>
              <Image src={LOGO.Sicoob} alt="" width={150} height={150} />
              <div className={styled.text}>
                <h3> {experience.position}</h3>
                <li>{experience.summary}</li>
                <li>{experience.technologies}</li>
              </div>
              <div className={styled.startDate}>
                <p>{experience.startDate} - Present</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
