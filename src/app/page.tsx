import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Whatido from "./components/WhatIDo";
import StatsSection from "./components/StatsSection";
import ProjectsSection from "./components/ProjectsSection";
import Resume from "./components/Resume"
import TeamMembers from "./components/TeamMembers";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Whatido/>
      <StatsSection/>
      <ProjectsSection/>
      <Resume/>
      <TeamMembers/>
      <BlogSection/>
      <ContactSection/>
    </main>
  );
}