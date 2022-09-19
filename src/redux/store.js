import {legacy_createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk, logger];
const store = legacy_createStore(reducers, applyMiddleware(...middlewares));
console.log('INITIAL STATE', store.getState());
// store.subscribe(() => {
//   console.log(store.getState());
// });
export default store;
