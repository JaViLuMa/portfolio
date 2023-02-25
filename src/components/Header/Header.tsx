import type { FC } from 'react';

import cn from 'utils/cn';

import type { HeaderProps } from './Header.types';

const Header: FC<HeaderProps> = ({ className, children, ...rest }) => (
  <div
    className={cn(
      'box-border flex w-full items-center justify-center border border-black dark:border-white',
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export default Header;
