import React, { useState } from 'react';
import { AdminDashboard } from './components/AdminDashboard';
import { VideoModal } from './components/VideoModal';
import { useProjects } from './hooks/useProjects';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const {
    projects,
    addProject,
    updateProject,
    deleteProject,
    seedDefaults
  } = useProjects();

  return (
    <>
      <AdminDashboard
        projects={projects}
        onAddProject={addProject}
        onUpdateProject={updateProject}
        onDeleteProject={deleteProject}
        onSeedDefaults={seedDefaults}
        onPreviewProject={(p) => setSelectedProject(p)}
      />

      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default App;
