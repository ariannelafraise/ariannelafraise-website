import Link from 'next/link'

import type { ProjectData } from '../models/project-data'

import './project-card.css'

interface Props {
    data: ProjectData
};

const ProjectCard: React.FC<Props> = ({data}) => {
    return (
        <div className='project-card border'>
            <h2><Link href={`/projects/${data.id}`}>{data.name}</Link>↗</h2>
            <p>{data.description}</p>
        </div>
    );
};

export default ProjectCard;