import { RootState } from '../../lib/redux/init/store';
import { IProfile } from '../../types';

export const profileData = (state: RootState): IProfile => {
  return state.profileReducer.profile;
};
