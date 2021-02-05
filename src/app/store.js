import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import infoReducer from '../features/counter/fetchSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    info: infoReducer
  },
});
