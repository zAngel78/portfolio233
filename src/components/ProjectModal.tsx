import { useEffect } from 'react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay active" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-body">
          <div className="modal-image-container">
            <img src={project.image} alt={project.name} className="modal-image" />
          </div>

          <div className="modal-info">
            <h2 className="modal-title">{project.name}</h2>
            <p className="modal-description">{project.description}</p>

            <div className="modal-technologies">
              <h3 className="tech-title">Technologies Used</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag-large">{tech}</span>
                ))}
              </div>
            </div>

            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                VIEW PROJECT
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
