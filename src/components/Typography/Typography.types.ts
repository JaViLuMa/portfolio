import type { HTMLAttributes, ReactElement } from 'react';

type LabelAndChildren =
  | {
      label: string;
      children?: never;
    }
  | {
      label?: never;
      children: ReactElement | string;
    };

export type TypographyProps = HTMLAttributes<HTMLDivElement> & {
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  asLink?: boolean;
  href?: string;
  isExternal?: boolean;
} & LabelAndChildren;
