"use client";

import styled from "../../../style/allStyles/sections/heroSection.module.css";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { EXTERNALLINK } from "@/lib/data";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Perfil from "../../../assets/icons/perfil.jpeg"


export function HeroSection() {
  return (
    <div className={styled.container}>
      <div className={styled.sectionHero}>
        <h1>Olá, me chamo <span>Danielle Melo</span></h1>
        <p>
          Sou desenvolvedora front-end em constante busca por evolução e
          aprimoramento, meu objetivo é crescer profissionalmente e me tornar
          uma desenvolvedora full-stack capaz de criar soluções e aplicações
          eficientes. Atualmente, integro a equipe do Sicoob Credisul como
          aprendiz de desenvolvimento front-end, aprendendo e contribuindo com
          esse time. 
        </p>

        <div className={styled.localization}>
          <MapPin size={30} />
          <p>Rondônia, Brasil</p>
        </div>
        <div >
            <button className={styled.btnDownload} onClick={() => window?.open('/assets/profile/profile.pdf', '_blank')}>Download CV</button>   
        </div>
        <div className={styled.iconsHero}>
          <Link href={EXTERNALLINK.GITHUB}>
            <GithubLogo size={30} color="#FFFFFF"/>
          </Link>
          <Link href={EXTERNALLINK.LINKDIN}>
            <LinkedinLogo size={30} color="#FFFFFF"/>
          </Link>
        </div>
      </div>
      {/* <div>
        <Image src={Perfil} alt="" className={styled.perfilImg}/>
      </div> */}
    </div>
  );
}
