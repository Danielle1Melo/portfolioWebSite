import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import LogoJS from "@/assets/icons/icon-javascript.svg";
import LogoFigma from "@/assets/icons/icon-figma.svg";
import LogoNextjs from "@/assets/icons/icon-nextjs.svg";
import LogoReact from "@/assets/icons/icon-react.svg";
import LogoSass from "@/assets/icons/icon-sass.svg";
import LogoTailwind from "@/assets/icons/icon-tailwindcss.svg";
import LogoTypeScript from "@/assets/icons/icon-typescript.svg";


export const EXTERNALLINK = {
  GITHUB: "https://github.com/Danielle1Melo",
  LINKDIN: "https://www.linkedin.com/in/danielle-silva-de-melo-0013b823a/",
}

export const NAVLINKS = [
  {
    label: "Sobre Mim",
    href: "#about",
  },
  {
    label: "Experiencia",
    href: "#experience",
  },
  {
    label: "Contato",
    href: "#contact",
  },
];

export const SOCIALLINKS = [
  {
    icon: <GithubLogo size={32} />,
    href: "https://github.com/Danielle1Melo",
  },
  {
    icon: <LinkedinLogo size={32} />,
    href: "https://www.linkedin.com/in/danielle-silva-de-melo-0013b823a/",
  },
];

export const TECHNOLOGIES = [
  {
    label: "Javascript",
    logo: LogoJS,
  },
  {
    label: "typescript",
    logo: LogoTypeScript,
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
  },
  {
    label: "React",
    logo: LogoReact,
  },
  {
    label: "Figma",
    logo: LogoFigma,
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwind,
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
  },
];

export const EXPERIENCES = [
  {
    position: "Aprendiz de Desenvolvimento",
    startDate: "Nov 2023",
    summary: [
      'Atuo como desenvolvedora front-end',
    ],
    technologies: [ 'Next.js, Typescript, Css Modules'],
  }
]
