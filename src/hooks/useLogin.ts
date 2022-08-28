import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { IFormValues } from '../components/Login/config';
import { CREDENTIALS } from '../constants';
import { useMessage } from './useMessage';
import { getProfile, resetProfile } from '../redux/actions/profile';
import { setAuthStatus } from '../redux/actions/auth';
import { AppDispatch } from '../lib/redux/init/store';

export const useLogin = () => {
  const { runMessage } = useMessage();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const valueStorage = localStorage.getItem('isAuth');
  const { username, password } = CREDENTIALS;

  useEffect(() => {
    if (valueStorage && pathname === '/login') {
      navigate('/profile');
    }
  }, [valueStorage]);

  const login = (user: IFormValues) => {
    if (user.username === username && user.password === password) {
      localStorage.setItem('isAuth', 'true');
      navigate('/profile');
      dispatch(setAuthStatus(true));
      dispatch(getProfile(2));
      runMessage('Welcome!', 'success');
    } else {
      runMessage('Incorrect login or password', 'error');
    }
  };

  const logout = () => {
    localStorage.removeItem('isAuth');
    dispatch(setAuthStatus(false));
    dispatch(resetProfile());
    if (pathname === '/profile') {
      runMessage('Looking forward to your return ;)', 'info');
      navigate('/login');
    }
  };

  return {
    login,
    logout,
  };
};
