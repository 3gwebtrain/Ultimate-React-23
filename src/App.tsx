import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import HomePage from './pages/Homepage';
import Pagenotfound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Product from './pages/Product';

export default function App() {
  console.log('base', import.meta.env.BASE_URL);
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='app' element={<AppLayout />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}
