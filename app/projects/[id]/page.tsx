import { remark } from 'remark';
import html from 'remark-html';


import { fetchProjectsPaths, fetchProject } from '../../lib/projectsUtils';
import { Project } from '../../models/project';

export async function generateStaticParams() {
    const projectsPaths: Array<string> = fetchProjectsPaths();
    return projectsPaths.map((id: string) => ({
        id: id
    }));
};

function getProject(id: string) : Project {
    return fetchProject(id);
}

async function processMarkdown(id: string) : Promise<string> {
    const content : string = getProject(id).content;
    const processedContent = await remark()
        .use(html)
        .process(content);
    return processedContent.toString();
}

export default async function ProjectDetails({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const processedContent: string = await processMarkdown((await params).id);
    return (
        <>
            <div dangerouslySetInnerHTML={{__html: processedContent}}/>
        </>
    );
};