import { FC, ReactElement } from 'react';

import './index.scss';

type Props = {
  children: ReactElement | string;
  className: string;
};

export const OfferText: FC<Props> = ({ children, className }) => {
  return <p className={`${className} offer-text`}>{children}</p>;
};
