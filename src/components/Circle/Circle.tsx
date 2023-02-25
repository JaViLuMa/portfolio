import type { FC } from 'react';

import cn from 'utils/cn';

import type { CircleProps } from './Circle.types';

const Circle: FC<CircleProps> = ({ className }) => (
  <div
    className={cn(
      'rounded-full border-[3px] border-black back-shadow-initial-black dark:border-white dark:back-shadow-initial-white',
      className
    )}
  />
);

export default Circle;
