import type { FC } from 'react';

import IconCV from 'icons/IconCV';

import CV_FALLBACK from './CV.constants';
import type { CVProps } from './CV.types';

import Typography from '../Typography';

const CV: FC<CVProps> = ({ data: cv, error }) => (
  <div className="flex h-full w-full items-center justify-center border border-black bg-philippine-yellow py-6 px-12 grid-in-cv dark:border-white dark:bg-lemon-glacier">
    <a
      href={!error && cv.length && cv[0]?.link ? cv[0].link : CV_FALLBACK.LINK}
      rel="noopener noreferrer"
      target="_blank"
      className="flex items-center justify-center gap-4 xl:cursor-file xl:flex-col"
    >
      <div className="rounded-2xl border-2 border-black bg-white py-4 px-3 transition-all back-shadow-initial-black md:py-7 md:px-4 xl:py-9 xl:px-6 xl:hover:back-shadow-hover-black">
        <IconCV />
      </div>
      <Typography Tag="h6" label="download my CV" className="text-center text-4xl font-medium" />
    </a>
  </div>
);

export default CV;
