import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage';
import Favourite from './pages/Favourite';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import Wallet from './pages/Wallet';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Favourite" element={<Favourite />} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
