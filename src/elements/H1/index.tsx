import { FC, ReactElement } from 'react';

import './index.scss';

type Props = {
  children: string | ReactElement;
  className?: string;
};

export const H1: FC<Props> = ({ className, children }) => {
  return <h1 className={`${className} title-page`}>{children}</h1>;
};

H1.defaultProps = {
  className: '',
};
