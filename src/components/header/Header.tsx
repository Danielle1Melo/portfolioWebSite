"use client";
import styled from "../../style/allStyles/homePage.module.css"
import { LOGO } from "@/utils/logos";
import Image from "next/image";

export function HeaderPage() {
  return (
    <div className={styled.container}>
      <div>
        <Image src={LOGO.MainLogo} alt="" width={60} height={60} />
      </div>
      <div className={styled.links}>
        <button>About</button>
        <button>Work</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
