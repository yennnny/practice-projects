import styled from 'styled-components';

const HeaderBlock = styled.header`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #d5d5d5;

  h1 {
    margin: 0;
    font-size: 32px;
    font-weight: 800;
    color: #343a40;
  }
  .day {
    margin-left: 5px;
    color: #868e96;
    font-size: 18px;
    font-weight: 600;
  }
  .tasks-total {
    color: #50c289;
    font-size: 18px;
    margin-top: 30px;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <h1>
        2024년 06월 14일 <span className="day">금요일</span>
      </h1>
      <p className="tasks-total">할 일 0개 남음</p>
    </HeaderBlock>
  );
};

export default Header;
