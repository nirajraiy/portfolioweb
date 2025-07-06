import React, { Suspense } from "react";
import ProjectsPage from "@/components/project/ProjectsPage"; // adjust path as needed

const ProjectsWrapperPage = () => {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsPage />
    </Suspense>
  );
};

export default ProjectsWrapperPage;
