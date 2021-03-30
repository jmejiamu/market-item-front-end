import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import infoReducer from '../features/counter/fetchSlice';
import carouselReducer from '../features/fetchCarousel/fetchCarousel';
import popularReducer from '../features/fetchPopular/fetchPopular';
import newReducer from '../features/fetchNew/fetchNew';
import walletReducer from '../features/fetchWallet/fetchWallet';
import watchReducer from '../features/fetchWatch/fetchWatch';
import hatReducer from '../features/fetchHats/fetchHats';

export default configureStore({
  reducer: {
    counter: counterReducer,
    info: infoReducer,
    carousel: carouselReducer,
    popular: popularReducer,
    newdata: newReducer,
    wallet: walletReducer,
    watch: watchReducer,
    hat: hatReducer
  },
});
