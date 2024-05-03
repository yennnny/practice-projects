import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="p-8">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
