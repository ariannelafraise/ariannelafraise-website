import Link from 'next/link'

import type { ProjectData } from '../models/project-data'

import './project-card.css'

interface Props {
    data: ProjectData
};

const ProjectCard: React.FC<Props> = ({data}) => {
    return (
        <div className='project-card'>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong><Link href={`/projects/${data.id}`}>Check it out</Link></strong>
        </div>
    );
};

export default ProjectCard;