import { createSlice } from '@reduxjs/toolkit';

const initiaCounterlState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  // initiaCounterlState: { counter: 0, showCounter: true },
  // initiaCounterlState: initiaCounterlState,
  initialState: initiaCounterlState,
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

export default counterSlice.reducer;
