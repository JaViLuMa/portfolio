import type { ImageId } from '../../Me.types';

export type MeImageProps = {
  src: string | undefined;
  alt: string | undefined;
  keys: ImageId[];
  currentImageIndex: number;
  next: () => void;
  prev: () => void;
  dotClick: (index: number) => void;
};
