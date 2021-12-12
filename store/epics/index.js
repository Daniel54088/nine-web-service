import { combineEpics } from 'redux-observable';
import post from './post';

export default combineEpics(
  post,
);
