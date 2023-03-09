import {configureStore} from '@reduxjs/toolkit';
import {input, exit} from './slice';

//encapsulating reducers
const store = configureStore({
  reducer: {
    input: input.reducer,
    exit: exit.reducer,
  },
});

export default store;
