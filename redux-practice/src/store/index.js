import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// 여러개의 리듀서를 하나의 리듀서로 쉽게 합치기 위하여 configureStore 사용
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
