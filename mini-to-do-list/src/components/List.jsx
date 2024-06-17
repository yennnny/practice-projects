import styled from 'styled-components';
import Item from './Item';
import { useTodoState } from './Context';

const ListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const List = () => {
  const todos = useTodoState();
  return (
    <ListBlock>
      {todos.map((todo) => (
        <Item key={todo.id} id={todo.id} txt={todo.txt} done={todo.done} />
      ))}
    </ListBlock>
  );
};

export default List;
