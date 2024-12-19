import Introduction from "./components/introduction";
import ProjectsList from "./components/projects-list";
import Footer from "./components/footer";
import type { Project } from "./models/project";
import { fetchProjects } from './lib/projectsUtils';

const getProjects = () :  Array<Project> => {
  return fetchProjects();
}

export default function Home() {

  const projects: Array<Project> = getProjects();

  return(
    <>
      <div className="border" style={{color: "#ff9d47", textAlign: "center" }}>
        <h3>/!\ Under construction /!\</h3>
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
      
      <div className="border" style={{color: "#ff9d47", textAlign: "center", marginTop: "5vh" }}>
        <h3>/!\ Under construction /!\</h3>
        <p>im working really hard yes yes</p>
      </div>

      <Footer/>
    </>
  );
};