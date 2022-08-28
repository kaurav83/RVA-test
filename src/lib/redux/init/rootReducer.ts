import { combineReducers } from 'redux';
import { profileReducer } from '../../../redux/reducers/profile';
import { authReducer } from '../../../redux/reducers/auth';

export const rootReducer = combineReducers({
  profileReducer,
  authReducer,
});
