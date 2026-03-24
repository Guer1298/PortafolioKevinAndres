import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { quickOverviewItems } from "./quickOverview.data";

function QuickOverviewSection() {
  return (
    <section className="quick section">
      <Container size="md">

        <SectionTitle
          eyebrow="Overview"
          title="A quick look at how I work and think"
          subtitle="I approach product development from a systems perspective, combining design, engineering and business impact."
          align="left"
        />

        <ul className="quick__list">
          {quickOverviewItems.map((item, index) => (
            <li key={item} className="quick__item">
              
              <span className="quick__index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="quick__text">
                {item}
              </span>

            </li>
          ))}
        </ul>

      </Container>
    </section>
  );
}

export default QuickOverviewSection;