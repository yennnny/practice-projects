import styled from 'styled-components';

const LayoutBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: #f1f1f1;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
}`;

const Layout = ({ children }) => {
  return <LayoutBlock>{children}</LayoutBlock>;
};

export default Layout;
