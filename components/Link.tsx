import NextLink from 'next/link';
import { FC } from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: string;
}

const Link: FC<LinkProps> = ({ href, className, children }) => {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;
