import { createGlobalStyle } from 'styled-components';
import Layout from './Layout';
import Header from './components/Header';
import List from './components/List';

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <List />
      </Layout>
    </>
  );
}

export default App;
