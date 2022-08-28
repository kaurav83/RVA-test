import { authType } from '../types/auth';

export const setAuthStatus = (flag: boolean) => {
  return {
    type: authType.GET_AUTH_STATUS,
    payload: flag,
  };
};
