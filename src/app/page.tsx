import { FooterPage } from "@/components/footer/Footer";
import { HeaderPage } from "@/components/header/Header";
import { AboutSection } from "@/components/sections/aboutSection/AboutSection";
import { ExperienceSection } from "@/components/sections/experience/Experience";
import { HeroSection } from "@/components/sections/heroSection/HeroSection";
import { SkillsSections } from "@/components/sections/skills/SkillsSection";


export default function Home() {
  return (
    <>
      <HeaderPage />
      <HeroSection />
      <AboutSection />
      <SkillsSections />
      <ExperienceSection />
      <FooterPage />
    </>
  );  
}
