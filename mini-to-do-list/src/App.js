import { createGlobalStyle } from 'styled-components';
import Layout from './Layout';
import Header from './components/Header';
import List from './components/List';
import AddItem from './components/AddItem';
import TodoProvider from './components/Context';

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Layout>
        <Header />
        <List />
        <AddItem />
      </Layout>
    </TodoProvider>
  );
}

export default App;
