"use client";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import styled from "../../../style/allStyles/sections/aboutSection.module.css";
import Link from "next/link";
import { EXTERNALLINK } from "@/lib/data";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Image from "next/image";
import { LOGO } from "@/utils/logos";

export function AboutSection() {
  return (
    <div className={styled.container}>
      <div className={styled.aboutMe}>
        <p>Sobre mim</p>
      </div>

      <div className={styled.section}>
        <div className={styled.photo}>
          <GithubLogo size={100} />
        </div>
        <div className={styled.sectionText}>
          <h1>Sobre MIM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aperiam mollitia dicta, molestiae nesciunt vero placeat blanditiis
            nisi soluta porro tenetur ut in sed officia doloribus odit iure!
            Corrupti, iusto. I'm a passionate, self-proclaimed designer who
            specializes in full stack development (React.js & Node.js). 
            <p>
            I am
            very enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel perfect design, and
            writing clear, readable, highly performant code matters to me. I
            began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            </p>
        
            <p>
            I am
            very enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel perfect design, and
            writing clear, readable, highly performant code matters to me. I
            began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
