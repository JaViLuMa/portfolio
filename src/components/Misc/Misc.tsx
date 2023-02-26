import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import EXPERIENCES_FALLBACK from './Misc.constants';
import type { MiscProps } from './Misc.types';

import Header from '../Header';
import Typography from '../Typography';

const Misc: FC<MiscProps> = ({ data: experience, error }) => (
  <div className="flex h-full flex-col border border-black px-12 py-8 grid-in-misc dark:border-white md:px-6">
    <Header className="mb-10 border-2 bg-light-cobalt-blue px-6 py-6 back-shadow-initial-black dark:bg-aqua dark:back-shadow-initial-white md:mb-4 xl:transition-all xl:hover:back-shadow-hover-black xl:dark:hover:back-shadow-hover-white">
      <Typography Tag="h4" label="Experience" className="text-3xl font-semibold" />
    </Header>
    <div className="h-full overflow-y-scroll pr-8 scrollbar scrollbar-thumb-black dark:border-white dark:scrollbar-thumb-white">
      <ReactMarkdown className="dark:text-white [&_h5]:relative [&_h5]:mb-2 [&_h5]:w-fit [&_h5]:font-clash [&_h5]:text-2xl [&_h5]:font-medium after:[&_h5]:absolute after:[&_h5]:bottom-0 after:[&_h5]:left-1/2 after:[&_h5]:z-[-1] after:[&_h5]:h-1/2 after:[&_h5]:w-[calc(100%+1rem)] after:[&_h5]:bg-philippine-yellow after:[&_h5]:transform-center-x after:[&_h5]:dark:bg-electric-pink [&_p]:mb-4 [&_p]:font-roboto [&_p]:text-lg [&_p]:italic">
        {!error && experience.length && experience[0]?.text
          ? experience[0].text
          : EXPERIENCES_FALLBACK.EXPERIENCE}
      </ReactMarkdown>
    </div>
  </div>
);

export default Misc;
