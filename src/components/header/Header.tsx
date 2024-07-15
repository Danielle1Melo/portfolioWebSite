"use client";
import { NAVLINKS } from "@/lib/data";
import styled from "../../style/allStyles/headerPage.module.css";
import { LOGO } from "@/utils/logos";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../sidebar/Sidebar";
import { List } from "@phosphor-icons/react";

import UseStatusMenuCOntext from "@/context/contextSidebar/UseStatusMenuContext";

export function HeaderPage() {
  const { activeMenu } = UseStatusMenuCOntext();
  return (
    <>
      <div className={styled.sidebar}>
        <Sidebar />
      </div>
      <div className={styled.container}>
        <div>
          <Image src={LOGO.MainLogo} alt="" width={100} height={100} />
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
            <button className={styled.btnDownload}>
              <Link
              aria-label="Downlod Resume"
                download 
                href="src/utils/Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Link>
            </button>
          </div>
        </div>

        <List
          size={30}
          color="#ffffff"
          className={styled.menuIcon}
          onClick={() => activeMenu()}
        />
      </div>
    </>
  );
}
