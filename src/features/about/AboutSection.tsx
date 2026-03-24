import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { aboutData } from "./about.data";

function AboutSection() {
  return (
    <section id="about" className="about section">
      <Container size="md">
        
        <SectionTitle
          eyebrow={aboutData.eyebrow}
          title={aboutData.title}
          subtitle={aboutData.description}
          align="left"
        />

        <div className="about__content">
          
          {/* Highlights */}
          <ul className="about__highlights">
            {aboutData.highlights?.map((item) => (
              <li key={item} className="about__item">
                <span className="about__bullet" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

      </Container>
    </section>
  );
}

export default AboutSection;