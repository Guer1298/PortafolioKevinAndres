import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Card from "../../components/ui/Card";
import { capabilityBlocks } from "./advanced.data";

function AdvancedSection() {
  return (
    <section className="advanced section" id="advanced">
      <Container size="lg">
        <SectionTitle
          eyebrow="Capabilities"
          title="Advanced capabilities built for scale and intelligence"
          subtitle="I combine AI, infrastructure and product thinking to design systems that are efficient, reliable and ready to grow."
        />

        <div className="advanced__grid">
          {capabilityBlocks.map((block) => (
            <Card
              key={block.title}
              variant="glass"
              padding="lg"
              hoverable
              className="advanced-card"
            >
              <div className="advanced-card__header">
                <span className="advanced-card__eyebrow">Core Area</span>
                <h3>{block.title}</h3>
              </div>

              <ul className="advanced-card__list">
                {block.points.map((point) => (
                  <li key={point} className="advanced-card__item">
                    <span className="advanced-card__bullet" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="system-flow">
          <div className="system-flow__header">
            <span className="system-flow__eyebrow">System Thinking</span>
            <h3 className="system-flow__title">From interface to infrastructure</h3>
          </div>

          <div className="system-flow__track">
            <div className="system-flow__node">
              <span className="system-flow__label">Frontend</span>
              <p>User interface, interactions and client-side experience</p>
            </div>

            <span className="system-flow__arrow">→</span>

            <div className="system-flow__node">
              <span className="system-flow__label">Backend</span>
              <p>Business logic, APIs and process orchestration</p>
            </div>

            <span className="system-flow__arrow">→</span>

            <div className="system-flow__node">
              <span className="system-flow__label">Infrastructure</span>
              <p>Deployment, scalability, delivery and reliability</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AdvancedSection;