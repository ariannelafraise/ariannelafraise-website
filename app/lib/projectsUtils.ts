import fs from 'node:fs';
import matter, { GrayMatterFile } from 'gray-matter';

import type { ProjectData } from '../models/project-data';
import type { Project } from '../models/project';

export function fetchProjects() : Array<Project> {
    return fs.readdirSync('app/projects-md')
        .filter((fileName: string) => fileName.endsWith('.mdx'))
        .map((fileName: string) => { return matter(fs.readFileSync(`app/projects-md/${fileName}`, 'utf-8'))})
        .map((gmFile : GrayMatterFile<string>) => ({ content: gmFile.content, data: gmFileDataToProjectData(gmFile.data) }))
        .sort((p1 : Project, p2: Project) => p2.data.priority - p1.data.priority);
};

export function fetchProjectsPaths() : Array<string> {
    return fs.readdirSync('app/projects-md')
        .filter((fileName: string) => fileName.endsWith('.mdx'))
        .map((fileName: string) => fileName.split('.')[0])
};

export function fetchProject(id: string) : Project {
    const fullFileName: unknown = fs.readdirSync('app/projects-md').find((fileName: string) => fileName == `${id}.mdx`);

    if (typeof fullFileName !== 'string') throw new Error('This project file does not exist');

    const gmFile : GrayMatterFile<string> = matter(fs.readFileSync(`app/projects-md/${fullFileName}`, 'utf-8'))

    return ({ content: gmFile.content, data: gmFileDataToProjectData(gmFile.data) })
};

function gmFileDataToProjectData(data: {[key: string]: unknown}) : ProjectData {
    /*
    Since projects frontmatter are 100% based on ProjectData,
    we can assume that it should always be the same data structure.
    We still put validation logic in place, because, if it doesn't match,
    that means that there is either a mistake in the markdown file, or in ProjectData.
    */
    const projectData = data as unknown as ProjectData;
            
    if (!projectData.id ||
        !projectData.name ||
        !projectData.description ||
        !projectData.priority
    )
        throw new Error('Invalid frontmatter detected.');

    return projectData;
};