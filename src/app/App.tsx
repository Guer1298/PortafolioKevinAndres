import MainLayout from "../components/layout/MainLayout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import HeroSection from "../features/hero/HeroSection";
import ValueSection from "../features/value-proposition/ValueSection";
import ProjectsSection from "../features/projects/ProjectsSection";
import TechnologiesSection from "../features/technologies/TechnologiesSection";
import AdvancedSection from "../features/advanced-capabilities/AdvancedSection";
import AboutSection from "../features/about/AboutSection";
import ContactSection from "../features/contact/ContactSection";

function App() {
  return (
    <MainLayout>
      <Header />

      <main>

  <section aria-label="Introduction">
    <HeroSection />
  </section>

  <section aria-label="Value Proposition">
    <ValueSection />
  </section>

  <section aria-label="Projects">
    <ProjectsSection />
  </section>

  <section aria-label="Capabilities">
    <TechnologiesSection />
    <AdvancedSection />
  </section>

  <section aria-label="About">
    <AboutSection />
  </section>

  <section aria-label="Contact">
    <ContactSection />
  </section>

</main>

      <Footer />
    </MainLayout>
  );
}

export default App;