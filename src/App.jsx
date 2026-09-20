import { useState } from "react";
import { useActiveSection } from "./hooks/useActiveSection";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OverviewCards from "./components/OverviewCards";
import AboutPreview from "./components/AboutPreview";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import CurrentFocus from "./components/CurrentFocus";
import DevTerminal from "./components/DevTerminal";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const activeSection = useActiveSection();
  const [highlightedTech, setHighlightedTech] = useState(null);

  return (
    <>
      <Navbar activeSection={activeSection} />

      <main>
        {/* ─── Home Section ─── */}
        <Hero />
        <OverviewCards />
        <AboutPreview />
        <Education />
        <Certifications />
        <CurrentFocus />
        <DevTerminal />

        {/* ─── Projects Section ─── */}
        <Projects highlightedTech={highlightedTech} />

        {/* ─── Tech Stack Section ─── */}
        <TechStack
          highlightedTech={highlightedTech}
          onTechClick={setHighlightedTech}
        />

        {/* ─── Contact Section ─── */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
