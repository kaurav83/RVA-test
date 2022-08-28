import { FC } from 'react';
import { useSelector } from 'react-redux';

import { statusAuth } from '../../redux/selectors/auth';
import { useLogin, useFetchProfile } from '../../hooks';
import { Logo } from '../../elements';

import './index.scss';

export const Header: FC = () => {
  const { logout } = useLogin();
  useFetchProfile();
  const status = useSelector(statusAuth);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="header__wrapper container">
        <Logo className="header__logo" />
        {status ? (
          <button onClick={handleLogout} type="button" title="Log out" className="header__logout">
            <span className="header__logout-icon" />
          </button>
        ) : null}
      </div>
    </header>
  );
};
