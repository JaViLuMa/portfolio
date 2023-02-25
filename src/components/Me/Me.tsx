import { useState, type FC } from 'react';

import { DATABASE_ERROR } from 'constants/textFallback';
import cn from 'utils/cn';

import MeDots from './components/MeDots';
import MeImage from './components/MeImage';
import MeInfo from './components/MeInfo';
import type { MeProps } from './Me.types';

import Typography from '../Typography';

const Me: FC<MeProps> = ({ data: images, error }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex + images.length - 1) % images.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className={cn(
        'flex border border-black grid-in-me dark:border-white',
        error || !images.length
          ? 'h-full w-full items-center justify-center grid-in-me'
          : 'flex-col md:flex-row'
      )}
    >
      {!error && images.length ? (
        <>
          <MeImage
            src={images[currentImageIndex]?.src}
            alt={images[currentImageIndex]?.alt}
            next={handleNextImage}
            prev={handlePreviousImage}
            dotClick={handleDotClick}
            keys={images.map((image) => ({
              id: image.id,
            }))}
            currentImageIndex={currentImageIndex}
          />
          <div className="flex min-h-[288px] w-full flex-col items-center justify-center gap-3 border-t border-black px-7 py-14 dark:border-white md:gap-7 md:border-t-0">
            <MeInfo
              title={images[currentImageIndex]?.title}
              description={images[currentImageIndex]?.description}
            />
            <MeDots
              variant="desktop"
              keys={images.map((image) => ({
                id: image.id,
              }))}
              currentImageIndex={currentImageIndex}
              dotClick={handleDotClick}
            />
          </div>
        </>
      ) : (
        <Typography Tag="p" className="text-2xl" label={DATABASE_ERROR} />
      )}
    </div>
  );
};

export default Me;
