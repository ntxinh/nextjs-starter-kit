import { combineReducers } from 'redux';
import { postReducer } from './postReducer';

// COMBINED REDUCERS
const reducers = {
  post: postReducer,
}

export default combineReducers(reducers);
