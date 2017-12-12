import { combineReducers } from 'redux';
import auth from './auth';
import persist from './persist';

export default combineReducers({
  AUTH: auth,
  PERSIST: persist,
});
