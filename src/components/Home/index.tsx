import { FC } from 'react';
import { H1 } from '../../elements';

import './index.scss';

export const Home: FC = () => {
  return (
    <div className="home">
      <div className="home__container">
        <H1 className="home__title">Main page</H1>
      </div>
    </div>
  );
};
