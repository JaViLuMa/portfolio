import type { HTMLAttributes, ReactNode } from 'react';

export type HeaderProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};
