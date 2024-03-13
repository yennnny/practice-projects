import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  // initialState: { counter: 0, showCounter: true },
  // initialState: initialState,
  initialState,
  reducers: {
    increment(state) {
      // state를 직접 변경하는것은 불가능하지만 react-toolkit과 createSlice를 통해 가능하다
      // 자동으로 값을 복사하여 새로운 상태 객체를 생성하고 값을 넣는다
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

// 여러개의 리듀서를 하나의 리듀서로 쉽게 합치기 위하여 configureStore 사용
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: counterSlice.reducer, // 여러개의 리듀서일때는 객체를 만들어 넣음
});

export default store;
