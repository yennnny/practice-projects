import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authSlice from './auth';

// 여러개의 리듀서를 하나의 리듀서로 쉽게 합치기 위하여 configureStore 사용
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: {
    // reducer를 통째로 export해오거나, 여기서 .reducer를 사용할 수 있다
    counter: counterReducer,
    auth: authSlice.reducer,
  },
});

export default store;
