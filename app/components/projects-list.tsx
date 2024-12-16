import ProjectModel from "../models/project";
import Project from "./project";

import './projects-list.css'

const ProjectsList = () => {

    const projects: ProjectModel[] = [
        new ProjectModel(
            "Bloometti",
            "Level system Discord bot",
            "https://github.com/ariannelafraise/Bloometti"
        ),
        new ProjectModel(
            "Shark Names You",
            "A web application to help transgender individuals find a new name",
            "https://github.com/ariannelafraise/shark-names-you-api"
        ),
        new ProjectModel(
            "Personal website",
            "This website ʕっ•ᴥ•ʔっ",
            "https://github.com/ariannelafraise/ariannelafraise-website"
        )
    ];

    return(
        <div className="projects-list">
            <h1>~/Projects</h1>
            {
                projects.map( project => {
                    return <Project key={project.getName()} project={project}/>;
                })
            }
        </div>
    );
};

export default ProjectsList;