"use client";

import styled from "../../../style/allStyles/sections/heroSection.module.css";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { EXTERNALLINK } from "@/lib/data";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Perfil from "../../../assets/icons/perfil.jpeg";

export function HeroSection() {
  return (
    <div className={styled.container}>
      <div className={styled.sectionHero}>
        <h1>
          Olá, me chamo <span>Danielle Melo</span>
        </h1>
        <p>Frontend Developer | React.Js | Next.js | JS | TSX | 1 year of experience</p>

        <div className={styled.localization}>
          <MapPin size={30} />
          <p>Rondônia, Brasil</p>
        </div>
        <div className={styled.iconsHero}>
          <Link href={EXTERNALLINK.GITHUB}>
            <GithubLogo size={30} color="#FFFFFF" />
          </Link>
          <Link href={EXTERNALLINK.LINKDIN}>
            <LinkedinLogo size={30} color="#FFFFFF" />
          </Link>
        </div>
      </div>
      <div>
        <Image src={Perfil} alt="" className={styled.perfilImg}/>
      </div>
    </div>
  );
}
