import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import { cartSelector } from './store/slices/ui-slice';
import LazyLoader from './UI/Loader/Lazy Loader/LazyLoader';

const Home = lazy(() => import('./pages/Home'));
const Orders = lazy(() => import('./pages/Orders'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const Favourite = lazy(() => import('./pages/Favourite'));
const Search = lazy(() => import('./pages/Search'));
const Settings = lazy(() => import('./pages/Settings'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const Wallet = lazy(() => import('./pages/Wallet'));

const App = () => {
  const cartIsShown = useSelector(cartSelector);
  return (
    <Suspense fallback={<LazyLoader />}>
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
    </Suspense>
  );
};

export default App;
