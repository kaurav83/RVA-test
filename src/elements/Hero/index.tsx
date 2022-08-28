import { FC, ReactElement } from 'react';

import './index.scss';

type Props = {
  children: ReactElement | ReactElement[];
  className?: string;
};

export const Hero: FC<Props> = ({ children, className }) => {
  return <section className={`${className} hero-section`}>{children}</section>;
};

Hero.defaultProps = {
  className: '',
};
