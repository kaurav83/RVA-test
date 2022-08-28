import { FC } from 'react';
import { useMatch, useResolvedPath, Link } from 'react-router-dom';

type Props = {
  className?: string;
  children: string;
  to: string;
};

export const CustomLink: FC<Props> = ({ className, children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={match ? `${className} ${className}--is-active` : `${className}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

CustomLink.defaultProps = {
  className: '',
};
