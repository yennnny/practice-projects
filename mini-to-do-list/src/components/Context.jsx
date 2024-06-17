import { createContext, useContext, useReducer, useRef } from 'react';

const initialTodos = [
  { id: 1, txt: '프로젝트 생성하기', done: true },
  { id: 2, txt: '컴포넌트 스타일링하기', done: true },
  { id: 3, txt: 'Context 만들기', done: false },
  { id: 4, txt: '기능 구현하기', done: false },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) throw new Error('Cannot find TodoProvider');
  return context;
};
export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) throw new Error('Cannot find TodoProvider');
  return context;
};
export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) throw new Error('Cannot find TodoProvider');
  return context;
};

export default TodoProvider;
