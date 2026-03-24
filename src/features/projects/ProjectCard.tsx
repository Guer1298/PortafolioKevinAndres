import Card from "../../components/ui/Card";
import type { Project } from "../../types";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card variant="glass" padding="lg" hoverable className="project-card">

      <div className="project-card__header">
        <span className="project-card__label">Case Study</span>
        <h3 className="project-card__title">{project.title}</h3>
      </div>

      <div className="project-card__content">

        <div className="project-card__block">
          <span className="project-card__tag">Problem</span>
          <p>{project.problem}</p>
        </div>

        <div className="project-card__block">
          <span className="project-card__tag">Solution</span>
          <p>{project.solution}</p>
        </div>

        <div className="project-card__block">
          <span className="project-card__tag">Result</span>
          <p className="project-card__result">{project.result}</p>
        </div>

      </div>

      <div className="project-card__footer">

        <div className="project-card__tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card__chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank">
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank">
              Code
            </a>
          )}
        </div>

      </div>

    </Card>
  );
}

export default ProjectCard;