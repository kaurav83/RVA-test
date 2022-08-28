import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { getProfile } from '../redux/actions/profile';
import { setAuthStatus } from '../redux/actions/auth';
import { AppDispatch } from '../lib/redux/init/store';

export const useFetchProfile = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const valueStorage = localStorage.getItem('isAuth');

  useEffect(() => {
    if (valueStorage) {
      dispatch(getProfile(2));
      dispatch(setAuthStatus(true));

      if (pathname === '/login') {
        navigate('/profile');
      }
    }
  }, []);
};
