import { AnyAction } from 'redux';
import { authType } from '../types/auth';

const initialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case authType.GET_AUTH_STATUS:
      return {
        ...state,
        isAuth: action.payload,
      };

    default:
      return state;
  }
};
