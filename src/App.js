import { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './components/Authentication/SignUp';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import ProtectedRoutes from './components/Routes/ProtectedRoutes';
import { useAuth } from './hooks/use-auth';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Search from './pages/Search';
import { isAuthSelector } from './store/slices/auth-slice';
import { cartSelector } from './store/slices/ui-slice';
import LazyLoader from './UI/Loader/Lazy Loader/LazyLoader';

const Home = lazy(() => import('./pages/Home'));
const Orders = lazy(() => import('./pages/Orders'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const Favourite = lazy(() => import('./pages/Favourite'));
const Settings = lazy(() => import('./pages/Settings'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const Wallet = lazy(() => import('./pages/Wallet'));

const App = () => {
  const cartIsShown = useSelector(cartSelector);
  const isAuth = useSelector(isAuthSelector);
  const { verifyAuthStatus } = useAuth();

  useEffect(() => {
    verifyAuthStatus();
    return () => {};
  }, [verifyAuthStatus]);
  return (
    <Suspense fallback={<LazyLoader />}>
      {cartIsShown && <Cart />}
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="Home?category=Beef" />} />

          <Route path="Home" element={<Home />} />

          <Route
            path="Orders"
            element={
              <ProtectedRoutes>
                <Orders />
              </ProtectedRoutes>
            }
          />

          <Route
            path="Favourite"
            element={
              <ProtectedRoutes>
                <Favourite />
              </ProtectedRoutes>
            }
          />

          <Route
            path="Wallet"
            element={
              <ProtectedRoutes>
                <Wallet />
              </ProtectedRoutes>
            }
          />

          <Route
            path="settings"
            element={
              <ProtectedRoutes>
                <Settings />
              </ProtectedRoutes>
            }
          />

          <Route path="home/search" element={<Search />} />

          <Route path="home/categories" element={<CategoriesPage />} />

          <Route
            path="home/meal-details/:mealID"
            element={<ProductDetailsPage />}
          />

          <Route
            path="/authentication"
            element={
              isAuth ? <Navigate to="/Home?category=Beef" /> : <SignUp />
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
