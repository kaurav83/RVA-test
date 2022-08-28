import { RootState } from '../../lib/redux/init/store';

export const statusAuth = (state: RootState): boolean => {
  return state.authReducer.isAuth;
};
