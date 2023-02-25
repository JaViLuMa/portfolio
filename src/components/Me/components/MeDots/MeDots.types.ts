import type { ImageId } from '../../Me.types';

export type MeDotsProps = {
  variant: 'mobile' | 'desktop';
  keys: ImageId[];
  currentImageIndex: number;
  dotClick: (index: number) => void;
};
