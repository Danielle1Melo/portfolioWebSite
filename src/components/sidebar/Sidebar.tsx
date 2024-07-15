"use client";
import Image from "next/image";
import styled from "../../style/allStyles/sidebar.module.css";
import UseStatusMenuCOntext from "@/context/contextSidebar/UseStatusMenuContext";
import { LOGO } from "@/utils/logos";
import { X } from "@phosphor-icons/react";
import { NAVLINKS } from "@/lib/data";
import Link from "next/link";

export default function Sidebar() {
  const { statusMenu, activeMenu } = UseStatusMenuCOntext();

  return (
    <div
      className={styled.container}
      style={
        statusMenu
          ? {
              transform: "translateX(100%)",
            }
          : {}
      }
    >
      <div>
        <div className={styled.header}>
          <Image
            src={LOGO.MainLogo}
            alt=""
            width={80}
            height={80}
            className={styled.logo}
          />
          <button onClick={() => activeMenu()} className={styled.closedButon}>
            <X size={30} />
          </button>
        </div>

        <div className={styled.containerLinks}>
          <div className={styled.links}>
            <ul>
              {NAVLINKS.map((link, idx) => {
                return (
                  <li key={idx}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button
              className={styled.btnDownload}
   
            >
               <Link href={"/assets/profile/profile.pdf"}>Download CV</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
