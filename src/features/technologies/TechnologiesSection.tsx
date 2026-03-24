import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Card from "../../components/ui/Card";
import { technologies } from "./technologies.data";

function TechnologiesSection() {
  return (
    <section className="technologies section" id="technologies">
      <Container size="lg">
        <SectionTitle
          eyebrow="Technology"
          title="Capabilities shaped by design, engineering and systems thinking"
          subtitle="I use technology as a tool to create scalable, user-focused and high-impact digital products."
        />

        <div className="technologies__grid grid grid--auto-md grid--gap-lg">
          {technologies.map((group) => (
            <Card
              key={group.category}
              variant="glass"
              padding="lg"
              hoverable
              className="tech-card"
            >
              <div className="tech-card__header">
                <span className="tech-card__eyebrow">Capability Area</span>
                <h3 className="tech-card__title">{group.category}</h3>
                {"description" in group && group.description && (
                  <p className="tech-card__description">{group.description}</p>
                )}
              </div>

              <ul className="tech-card__list">
                {group.items.map((item) => (
                  <li key={item} className="tech-card__item">
                    <span className="tech-card__bullet" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TechnologiesSection;