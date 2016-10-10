//combine all reducers into one big object
import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import SignupReducer from './SignupReducer';
import HomeReducer from './HomeReducer';
// import FriendReducer from './FriendReducer';

const allReducers = combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
  home: HomeReducer,
  // friend: FriendReducer
});

export default allReducers;