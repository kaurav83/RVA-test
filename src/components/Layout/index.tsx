import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../index';

import './index.scss';

export const Layout: FC = () => {
  return (
    <div className="layout">
      <Header />
      <main className="view">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
