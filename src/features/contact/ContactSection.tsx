import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import SocialLinks from "../../components/common/SocialLinks";

function ContactSection() {
  return (
    <section id="contact" className="contact section">
      <Container size="sm">

        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something meaningful together"
          subtitle="I help turn ideas into scalable digital products. If you have a project in mind or want to collaborate, I’d love to hear from you."
        />

        <div className="contact__actions">
          <a href="mailto:tuemail@correo.com">
            <Button size="lg">Start a conversation</Button>
          </a>
        </div>

        <div className="contact__secondary">
          <p className="contact__hint">
            Prefer other ways to connect?
          </p>

          <SocialLinks variant="pill" />
        </div>

      </Container>
    </section>
  );
}

export default ContactSection;