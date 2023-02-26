import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import Typography from 'components/Typography';

import ABOUT_ME_FALLBACK from './AboutMe.constants';
import type { AboutMeProps } from './AboutMe.types';

import Header from '../Header';

const AboutMe: FC<AboutMeProps> = ({ data: aboutMeData, error }) => (
  <>
    <Header className="box-border h-fit bg-philippine-yellow py-2 grid-in-about-me-header dark:bg-lemon-glacier xl:h-auto xl:py-3">
      <Typography
        Tag="h1"
        label="About me"
        className="relative z-10 mb-2 border-b-[10px] border-solid border-black pb-2 text-6xl font-bold leading-none before:absolute before:top-[3px] before:z-[-1] before:content-['About_me'] before:text-stroke-before after:absolute after:top-[8px] after:left-0 after:z-[-2] after:content-['About_me'] after:text-stroke-after xl:text-[86px]"
      />
    </Header>
    <main className="flex h-96 flex-col items-center overflow-y-scroll border border-black pl-12 pr-8 pt-3 pb-6 grid-in-about-me scrollbar scrollbar-thumb-black dark:border-white dark:scrollbar-track-black dark:scrollbar-thumb-white md:py-7 md:px-4 xl:h-auto xl:py-7">
      <div className="h-full pr-8 scrollbar scrollbar-thumb-black dark:scrollbar-thumb-white">
        <ReactMarkdown
          key={aboutMeData[0]?.id}
          className="text-left font-roboto text-base italic dark:text-white xl:text-2xl"
        >
          {!error && aboutMeData.length && aboutMeData[0]?.description
            ? aboutMeData[0].description
            : ABOUT_ME_FALLBACK.DESCRIPTION}
        </ReactMarkdown>
      </div>
    </main>
  </>
);

export default AboutMe;
