import ProjectCard from "./project-card";

import type { ProjectData } from "../models/project-data";

import './projects-list.css'

interface Props {
    projects: Array<ProjectData>
};

const ProjectsList: React.FC<Props> = ({projects}) => {
    return (
        <>
            <h1 style={{textAlign: "center"}}>My projects</h1>
            <div className="projects-list">
                {
                    projects.map((p: ProjectData, index: number) => <ProjectCard key={index} data={p}/>)
                }
            </div>
        </>

    );
};

export default ProjectsList;