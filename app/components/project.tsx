import React from 'react';

import './project.css'

import ProjectModel from '../models/project';

interface Props {
    project: ProjectModel
};

const Project: React.FC<Props> = ({project}) => {
    return (
        <div className='project'>
            <h1>{project.getName()}</h1>
            <p>{project.getDescription()}</p>
            <a className='important' href={project.getUrl()}>Check it out</a>
        </div>
    );
};

export default Project;