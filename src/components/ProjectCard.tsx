import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  delay: number;
}

export default function ProjectCard({ project, onClick, delay }: ProjectCardProps) {
  return (
    <div
      className="project-card"
      data-project-id={project.id}
      onClick={onClick}
      style={{ animationDelay: `${delay}s` }}
    >
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-overlay">
        <h3 className="project-title">{project.title}</h3>
      </div>
    </div>
  );
}
