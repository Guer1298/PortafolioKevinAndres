import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { heroData } from "./hero.data";

function HeroSection() {
  return (
    <section id="home" className="hero">
      <Container size="xl">
        <div className="hero__content">

          {/* LEFT */}
          <div className="hero__text">

            {heroData.eyebrow && (
              <span className="hero__eyebrow">
                {heroData.eyebrow}
              </span>
            )}

            <h1 className="hero__title">
              {heroData.title}
            </h1>

            <p className="hero__subtitle">
              {heroData.subtitle}
            </p>

            {heroData.highlight && (
              <div className="hero__highlight">
                {heroData.highlight}
              </div>
            )}

            <div className="hero__actions">
              <a href="#projects">
                <Button size="lg">
                  {heroData.primaryCta}
                </Button>
              </a>

              <a href="#contact">
                <Button variant="secondary" size="lg">
                  {heroData.secondaryCta}
                </Button>
              </a>
            </div>

          </div>

          {/* RIGHT */}
          <div className="hero__visual">
            <div className="hero__card">
              <div className="hero__card-inner">
                <span>UX</span>
                <span>Frontend</span>
                <span>Backend</span>
                <span>AI</span>
                <span>DevOps</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default HeroSection;