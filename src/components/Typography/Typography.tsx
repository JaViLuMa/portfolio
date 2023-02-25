import type { FC } from 'react';

import cn from 'utils/cn';

import type { TypographyProps } from './Typography.types';

const Typography: FC<TypographyProps> = ({
  Tag,
  label,
  className,
  children,
  asLink,
  isExternal,
  href,
  ...rest
}) =>
  asLink ? (
    <a
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : '_self'}
      href={href}
    >
      <Tag className={cn('font-clash', className)} {...rest}>
        {label || children}
      </Tag>
    </a>
  ) : (
    <Tag className={cn('font-clash', className)} {...rest}>
      {label || children}
    </Tag>
  );

export default Typography;
