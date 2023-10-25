import { Route, Routes } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import HomePage from './pages/Homepage';
import Login from './pages/Login';
import Pagenotfound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Product from './pages/Product';

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='product' element={<Product />} />
      <Route path='pricing' element={<Pricing />} />
      <Route path='login' element={<Login />} />

      <Route path='app' element={<AppLayout />}>
        <Route index element={<p>List</p>} />
        <Route path='cities' element={<p>List of cities</p>} />
        <Route path='countries' element={<p>List of Countries</p>} />
        <Route path='form' element={<p>Form</p>} />
      </Route>

      <Route path='*' element={<Pagenotfound />} />
    </Routes>
  );
}
