import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import {
  createEpicMiddleware
} from 'redux-observable';


import rootEpic from './epics';
import rootReducer from './reducers';


const epicMiddleware = createEpicMiddleware();

const middleware = [
  epicMiddleware,
];
const enhancers = [];

const store = createStore(
  rootReducer(),
  applyMiddleware(...middleware), ...enhancers,
);

epicMiddleware.run(rootEpic);

export default store;
