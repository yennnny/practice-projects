import styled from 'styled-components';
import Item from './Item';

const ListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const List = () => {
  return (
    <ListBlock>
      <Item txt="프로젝트 생성하기" done={true} />
      <Item txt="컴포넌트 스타일링하기" done={true} />
      <Item txt="Context 만들기" done={false} />
      <Item txt="기능 구현하기" done={false} />
    </ListBlock>
  );
};

export default List;
