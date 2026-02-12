import Introduction from "./components/introduction";
import ProjectsList from "./components/projects-list";
import Footer from "./components/footer";
import type { Project } from "./models/project";
import { fetchProjects } from "./lib/projectsUtils";
import { fetchAllArt } from "./lib/artUtils";

const getProjects = (): Array<Project> => {
  return fetchProjects();
};

const getArts = (): Array<string> => {
  return fetchAllArt();
};

export default function Home() {
  const projects: Array<Project> = getProjects();
  // const arts: Array<string> = getArts();

  return (
    <>
      {/*
      <Banner
        title="/!\ AMBER ALERT /!\"
        message="all my strawberries have disappeared from my site. email: tip@federal-berry-of-investigation.gov with any tips, or contact me directly. thanks."
        color="#ff7575"/>
      */}
      <Introduction />
      {projects.length == 0 ? (
        <div className="center-text">
          <p>...</p>
          <h4>No projects to show</h4>
        </div>
      ) : (
        <>
          <ProjectsList projects={projects.map((p: Project) => p.data)} />
        </>
      )}
      {/*<ArtList arts={arts} />*/}
      {/*
        <>
          <Banner title="🚧 Art section planned 🚧" message="I make photo composites and want to learn music production" color="#ffc824ff"/>
        </>
      */}
      <Footer />
    </>
  );
}
