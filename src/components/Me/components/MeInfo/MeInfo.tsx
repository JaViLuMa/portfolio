import type { FC } from 'react';

import type { MeInfoProps } from './MeInfo.types';

import Typography from '../../../Typography';

const MeInfo: FC<MeInfoProps> = ({ title, description }) => (
  <>
    <Typography
      Tag="h2"
      label={title ?? 'Missing title sadly :('}
      className="relative text-[40px] leading-8 after:absolute after:bottom-[-5px] after:left-1/2 after:z-[-1] after:h-1/2 after:w-[calc(100%+1rem)] after:bg-philippine-yellow after:transform-center-x dark:text-white after:dark:bg-electric-pink md:after:content-none"
    />
    <Typography
      Tag="p"
      label={description ?? 'Missing description sadly :('}
      className="h-full font-roboto text-lg italic dark:text-white"
    />
  </>
);

export default MeInfo;
