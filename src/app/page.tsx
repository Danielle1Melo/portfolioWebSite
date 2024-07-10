import { HeaderPage } from "@/components/header/Header";
import { AboutSection } from "@/components/sections/aboutSection/AboutSection";
import { HeroSection } from "@/components/sections/heroSection/HeroSection";
import { SkillsSections } from "@/components/sections/skills/SkillsSection";


export default function Home() {
  return (
    <>
      <HeaderPage />
      <HeroSection />
      <AboutSection />
      <SkillsSections />
    </>
  );  
}
