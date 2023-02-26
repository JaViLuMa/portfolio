import type { FC } from 'react';

import cn from 'utils/cn';

import type { MeDotsProps } from './MeDots.types';

const MeDots: FC<MeDotsProps> = ({ variant, keys, currentImageIndex, dotClick }) => (
  <div
    className={cn(
      'items-center justify-center gap-2',
      variant === 'mobile'
        ? 'absolute bottom-[-22px] left-1/2 flex h-11 w-3/4 border-2 border-black bg-pale-magenta back-shadow-initial-black transform-center-x dark:border-white dark:bg-electric-pink dark:back-shadow-initial-white dark:transform-center-x md:hidden'
        : '',
      variant === 'desktop' ? 'hidden md:flex' : ''
    )}
  >
    {keys.map((key, index) => (
      <button
        type="button"
        key={key.id}
        aria-label={`Image ${index + 1}`}
        className={cn(
          'box-border h-6 w-6 rounded-full border-2 border-black dark:border-white md:cursor-image-light md:dark:cursor-image-dark',
          variant === 'mobile' ? 'bg-pale-magenta dark:bg-electric-pink' : '',
          index === currentImageIndex && 'bg-philippine-yellow dark:bg-lemon-glacier'
        )}
        onClick={() => dotClick(index)}
      />
    ))}
  </div>
);

export default MeDots;
