"use client";

import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import styled from "../../../style/allStyles/sections/contact.module.css";
import { EXTERNALLINK } from "@/lib/data";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";

export function ContactSection() {
  return (
    <div className={styled.container} id="contact">
      <div className={styled.headerContact}>
        <p>Contato</p>
        <h3>
          Sinta-se à vontade para entrar em contato comigo se estiver procurando
          um desenvolvedor
        </h3>
      </div>

      <div className={styled.contacts}>
        <div className={styled.Itenscontacts}>
          <EnvelopeSimple size={40} />
          <h3>danielleesilva.4@gmail.com</h3>
        </div>
        <div className={styled.Itenscontacts}>
          <Phone size={40} />
          <h3>+55 (69) 98124-1520</h3>
        </div>

        <div className={styled.socialLinks}>
          <p>Você também pode me encontrar nessas plataformas!</p>
          <div className={styled.iconsHero}>
            <Link href={EXTERNALLINK.GITHUB}>
              <GithubLogo size={30} color="#FFFFFF" />
            </Link>
            <Link href={EXTERNALLINK.LINKDIN}>
              <LinkedinLogo size={30} color="#FFFFFF" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
