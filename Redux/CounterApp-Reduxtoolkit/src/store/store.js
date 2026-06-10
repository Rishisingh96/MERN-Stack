import privacySlice from './privacy';
import counterSlice from './counter';
import { configureStore } from '@reduxjs/toolkit';



const counterStore = configureStore({
    reducer:{
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer,
        
    }
});

export default counterStore;
