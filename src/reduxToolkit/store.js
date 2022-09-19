import {configureStore} from '@reduxjs/toolkit';

import cakeReducer from './slices/cakeSlice';
import icecreamReducer from './slices/icecreamSlice';
import userReducer from './slices/userSlice';

import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: true,
});
export default store;
