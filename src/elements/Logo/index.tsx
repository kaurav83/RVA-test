import { FC } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

type Props = {
  className: string;
};

export const Logo: FC<Props> = ({ className }) => {
  return <Link to="/" className={`logo ${className}`} />;
};
