import request from 'axios';
import { AppThunk } from '../../lib/redux/init/store';
import { profileType } from '../types/profile';
import { IErrorResponse, IProfile } from '../../types';
import { api } from '../../api';

export const setProfile = (profile: IProfile) => {
  return {
    type: profileType.GET_PROFILE,
    payload: profile,
  };
};

export const resetProfile = () => {
  return {
    type: profileType.RESET_PROFILE,
    payload: {},
  };
};

export const getProfile =
  (id: number): AppThunk =>
  async (dispatch) => {
    try {
      const data: IProfile = await api.profile(id);

      dispatch(setProfile(data));
    } catch (err) {
      if (request.isAxiosError(err) && err.response) {
        const { message } = err.response?.data as IErrorResponse;
        // eslint-disable-next-line
        console.log(message);
      }
    }
  };
