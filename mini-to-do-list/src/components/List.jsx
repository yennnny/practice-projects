import styled from 'styled-components';

const ListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const List = () => {
  return <ListBlock>TodoList</ListBlock>;
};

export default List;
