import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import Typography from '../../../Typography';

import type { ProjectsProps } from './Projects.types';

const Projects: FC<ProjectsProps> = ({ projects }) => (
  <div className="flex h-full flex-col gap-4 overflow-y-scroll pr-6 scrollbar scrollbar-thumb-black dark:scrollbar-thumb-white md:gap-11">
    {projects.map((project) => (
      <div key={project.id}>
        <Typography
          Tag="h4"
          asLink={Boolean(project.link)}
          isExternal={project.external}
          href={project.link}
          label={project.title || 'Missing title sadly :('}
          className="relative mb-2 w-fit text-[28px] font-medium leading-[2.125rem] after:absolute after:bottom-[-5px] after:left-1/2 after:z-[-1] after:h-1/2 after:w-[calc(100%+1rem)] after:bg-philippine-yellow after:transform-center-x dark:text-white after:dark:bg-electric-pink md:mb-4 md:text-[40px] md:leading-8 xl:cursor-eye-light xl:dark:cursor-eye-dark"
        />
        <ReactMarkdown className="font-roboto text-xs italic  dark:text-white md:text-lg [&_*]:leading-4 md:[&_*]:leading-7 [&_a]:font-bold">
          {project.description || 'Missing description sadly :('}
        </ReactMarkdown>
      </div>
    ))}
  </div>
);

export default Projects;
