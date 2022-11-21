import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import CategoriesPage from './pages/CategoriesPage';
import ErrorPage from './pages/ErrorPage';
import Favourite from './pages/Favourite';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Search from './pages/Search';
import Settings from './pages/Settings';
import Wallet from './pages/Wallet';
import { cartSelector } from './store/slices/ui-slice';

const App = () => {
  const cartIsShown = useSelector(cartSelector);
  return (
    <>
      {cartIsShown && <Cart />}
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Favourite" element={<Favourite />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="home/search" element={<Search />} />
          <Route path="home/categories" element={<CategoriesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
