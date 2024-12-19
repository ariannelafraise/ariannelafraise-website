import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import Link from 'next/link';

import { fetchProjectsPaths, fetchProject } from '../../lib/projectsUtils';
import { Project } from '../../models/project';
import Footer from '../../components/footer';

import './project-details.css';

export async function generateStaticParams() {
    const projectsPaths: Array<string> = fetchProjectsPaths();
    return projectsPaths.map((id: string) => ({
        id: id
    }));
};

function getProject(id: string) : Project {
    return fetchProject(id);
}

async function processMarkdown(markdown: string) : Promise<string> {
    const processedContent = await remark()
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeHighlight)
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(markdown)
    return processedContent.toString();
}

export default async function ProjectDetails({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const project: Project = getProject((await params).id);
    const processedContent: string = await processMarkdown(project.content);
    return (
        <>
            <div className='header'>
                <h3>⟵&nbsp;&nbsp;<Link href={"/"}>Main Page</Link></h3>
            </div>
            <div className='markdown-content'>
                <div dangerouslySetInnerHTML={{__html: processedContent}}/>
            </div>
            <Footer/>
        </>
    );
};