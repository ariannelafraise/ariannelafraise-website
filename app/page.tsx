import Introduction from "./components/introduction";
import ProjectsList from "./components/projects-list";

import type { Project } from "./models/project";

import { fetchProjects } from './lib/projectsUtils';

const getProjects = () :  Array<Project> => {
  return fetchProjects();
}

export default function Home() {

  const projects: Array<Project> = getProjects();

  return(
    <>
      <div style={{color: "#ff9d47", textAlign: "center", border: "1px solid", }}>
        <h2>/!\ Under construction /!\</h2>
        <p>im working really hard yes yes</p>
      </div>
      
      <Introduction/>
      {
        projects.length == 0 
        ?
        <>
          <p>...</p>
          <h2>No projects to show</h2> 
        </>
        :
        <ProjectsList projects={projects.map((p: Project) => p.data)}/>
      }
      
    </>
  );
};