import Link from 'next/link'

import type { ProjectData } from '../models/project-data'

import './project-card.css'

interface Props {
    data: ProjectData
};

const ProjectCard: React.FC<Props> = ({data}) => {
    return (
        <div className='project-card border'>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p><Link href={`/projects/${data.id}`}>Check it out</Link>↗</p>
        </div>
    );
};

export default ProjectCard;