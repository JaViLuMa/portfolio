import type { FC } from 'react';

import type { MeImageProps } from './MeImage.types';

import MeDots from '../MeDots';

import IconArrowLeft from '../../../../icons/IconArrowLeft';
import IconArrowRight from '../../../../icons/IconArrowRight';

const MeImage: FC<MeImageProps> = ({
  src,
  alt,
  keys,
  currentImageIndex,
  next,
  prev,
  dotClick,
}) => (
  <div className="relative max-w-full flex-shrink-0 border-b border-black object-cover dark:border-white md:h-80 md:w-80 md:border-b-0">
    <button
      className="absolute top-0 left-0 ml-1 flex h-full w-1/5 items-center bg-transparent focus:bg-gray-100 focus:opacity-10 md:ml-0 md:cursor-left-arrow-light md:dark:cursor-left-arrow-dark"
      onClick={prev}
      aria-label="Previous"
      aria-labelledby="Previous"
    >
      <IconArrowLeft className="invert dark:invert-0 md:hidden" />
    </button>
    <img
      src={src}
      alt={alt}
      width={800}
      height={600}
      className="h-auto w-full object-cover"
    />
    <button
      className="absolute top-0 right-0 mr-1 flex h-full w-1/5 items-center justify-end bg-transparent focus:bg-gray-100 focus:opacity-10 md:mr-0 md:cursor-right-arrow-light md:dark:cursor-right-arrow-dark"
      onClick={next}
      aria-label="Next"
      aria-labelledby="Next"
    >
      <IconArrowRight className="invert dark:invert-0 md:hidden" />
    </button>
    <MeDots
      variant="mobile"
      keys={keys}
      currentImageIndex={currentImageIndex}
      dotClick={dotClick}
    />
  </div>
);

export default MeImage;
