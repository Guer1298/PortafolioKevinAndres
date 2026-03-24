import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Card from "../../components/ui/Card";
import { valueItems } from "./value.data";

function ValueSection() {
  return (
    <section className="value section" id="value">
      <Container size="lg">
        <SectionTitle
          eyebrow="Value"
          title="How I create value through design, engineering and systems thinking"
          subtitle="I combine product thinking, technical execution and user experience to build solutions that are useful, scalable and impactful."
        />

        <div className="value__grid grid grid--auto-md grid--gap-lg">
          {valueItems.map((item, index) => (
            <Card
              key={item.title}
              variant="glass"
              padding="lg"
              hoverable
              className="value-card"
            >
              <div className="value-card__header">
                <span className="value-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="value-card__title">{item.title}</h3>
              </div>

              <p className="value-card__description">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ValueSection;