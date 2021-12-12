import { combineReducers } from 'redux';
import post from './post';



const rootReducer  = (history) =>  combineReducers({
  post,
});

export default rootReducer;
