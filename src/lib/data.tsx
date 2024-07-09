import {Linkedin, Github} from "lucide-static"
import LogoJS from "@/assets/icons/icon-javascript.svg"

import {TechDetails} from "@/lib/types"

export const NAVLINKS = [
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Work',
        href: '#work',
    },
    {
        label: 'Contact',
        href: '#contact',
    },
]

export const SOCIALLINKS = [
    {
        icon: Github,
        href: 'https://github.com/Danielle1Melo'
    },
    {
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/danielle-silva-de-melo-0013b823a/'
    }

]

export const TECHNOLOGIES: TechDetails[] = [
    {
        label: 'Javascript',
        logo: LogoJS,
    },
    {
        label: 'Javascript',
        logo: LogoJS,
    },

]