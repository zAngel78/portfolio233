import { useState, useEffect } from 'react';
import { projects, Project } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import OnboardingTip from './OnboardingTip';

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (hasSeenOnboarding !== 'true') {
      setTimeout(() => setShowOnboarding(true), 1000);
    }
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowOnboarding(false);
    localStorage.setItem('hasSeenOnboarding', 'true');
  };

  return (
    <>
      <div className="gallery-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
              delay={index * 0.05}
            />
          ))}
        </div>
        {showOnboarding && <OnboardingTip onClose={() => setShowOnboarding(false)} />}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
