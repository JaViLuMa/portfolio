import type { FC } from 'react';

import ERROR from 'constants/textFallback';

import Projects from './components/Projects';
import type { ProjectsWorkedOnProps } from './ProjectsWorkedOn.types';

import Header from '../Header';
import Typography from '../Typography';

const ProjectsWorkedOn: FC<ProjectsWorkedOnProps> = ({ data: projects, error }) => (
  <div className="flex h-full flex-col border border-black py-8 px-12 grid-in-projects-worked-on dark:border-white md:py-11 md:px-6">
    <Header className="mb-9 border-2 bg-outrageous-orange py-4 back-shadow-initial-black dark:bg-red-ryb dark:back-shadow-initial-white md:mb-7 xl:transition-all xl:hover:back-shadow-hover-black xl:dark:hover:back-shadow-hover-white">
      <Typography
        Tag="h3"
        label="Projects"
        className="text-4xl font-semibold text-black dark:text-white md:text-[50px]"
      />
    </Header>
    {!error && projects.length ? (
      <Projects projects={projects} />
    ) : (
      <Typography Tag="p" className="text-2xl" label={ERROR.DATABASE} />
    )}
  </div>
);

export default ProjectsWorkedOn;
