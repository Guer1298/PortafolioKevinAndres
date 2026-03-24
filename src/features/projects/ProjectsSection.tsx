import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { projects } from "./projects.data";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="projects section">
      <Container size="lg">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work that turns ideas into measurable outcomes"
          subtitle="A selection of digital products built to solve real business problems through design, engineering and system thinking."
        />

        <div className="projects__grid grid grid--auto-lg grid--gap-lg">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;