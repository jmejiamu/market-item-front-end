import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import infoReducer from '../features/counter/fetchSlice';
import carouselReducer from '../features/fetchCarousel/fetchCarousel';
import popularReducer from '../features/fetchPopular/fetchPopular';

export default configureStore({
  reducer: {
    counter: counterReducer,
    info: infoReducer,
    carousel: carouselReducer,
    popular: popularReducer
  },
});
