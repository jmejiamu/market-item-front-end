import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import infoReducer from '../features/counter/fetchSlice';
import carouselReducer from '../features/fetchCarousel/fetchCarousel';
import popularReducer from '../features/fetchPopular/fetchPopular';
import newReducer from '../features/fetchNew/fetchNew';

export default configureStore({
  reducer: {
    counter: counterReducer,
    info: infoReducer,
    carousel: carouselReducer,
    popular: popularReducer,
    new: newReducer
  },
});
