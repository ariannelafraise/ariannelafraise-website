import Introduction from "./components/introduction";
import ProjectsList from "./components/projects-list";
import Banner from './components/banner';
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
      {/*
      <Banner 
        title="/!\ AMBER ALERT /!\"
        message="all my strawberries have disappeared from my site. email: tip@federal-berry-of-investigation.gov with any tips, or contact me directly. thanks."
        color="#ff7575"/> */
      }
      <Introduction/>
      {
        projects.length == 0
        ?
        <div className="center-text">
          <p>...</p>
          <h4>No projects to show</h4> 
        </div>
        :
        <ProjectsList projects={projects.map((p: Project) => p.data)}/>
      }
      {
        <Banner 
          title="/!\ under construction /!\"
          message=""
          color="#ffac75ff"/> 
      }
      {/* <Banner title="Title" message="Message" color="#ff00ff"/> */}
      <Footer/>
    </>
  );
};