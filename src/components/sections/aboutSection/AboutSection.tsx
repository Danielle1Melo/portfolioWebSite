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
            Sou desenvolvedora front-end em constante busca por evolução e
            aprimoramento, com o objetivo de crescer profissionalmente e me
            tornar uma desenvolvedora full-stack capaz de criar soluções e
            aplicações eficientes. Atualmente, integro a equipe do Sicoob
            Credisul como aprendiz de desenvolvimento front-end, onde tenho a
            oportunidade de aprender e contribuir com um time experiente e
            dinâmico, essa experiência tem sido fundamental para meu
            desenvolvimento técnico e profissional, permitindo-me aplicar os
            conhecimentos adquiridos e expandir minhas habilidades na prática.
          </p>
          <p>
            Sou formada em Técnica em Informática pelo Instituto Federal de
            Ciências e Tecnologia de Rondônia - Campus Vilhena, durante minha
            formação, tive a oportunidade de estagiar no Projeto FSLab
            (Laboratório de Fábricas de Software), onde participei do
            desenvolvimento de softwares voltados para a comunidade local. Essa
            experiência me proporcionou uma visão prática do desenvolvimento de
            software e a importância de criar soluções que atendam às
            necessidades reais dos usuários.
          </p>
          <p>
            Além disso, estou ampliando minha formação através do curso de
            Análise e Desenvolvimento de Sistemas pelo IFRO e uma formação Full
            Stack Javascript pela plataforma da Onebitcode, esses cursos estão
            me proporcionando um conhecimento mais profundo e abrangente das
            tecnologias e práticas de desenvolvimento, preparando-me para
            enfrentar os desafios do desenvolvimento full-stack.
          </p>
          <p>
            Estou constantemente buscando aprender e aprimorar minhas
            habilidades, dedicando-me a estudar novas tecnologias, tendências e
            boas práticas do mercado, meu objetivo é oferecer soluções eficazes
            e inovadoras aos projetos em que estou envolvida, contribuindo para
            o sucesso das equipes e organizações com as quais colaboro.
          </p>
        </div>
      </div>
    </div>
  );
}
