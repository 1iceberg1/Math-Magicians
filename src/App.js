import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import Quote from './components/quote';
import Navbar from './components/navbar';
import './App.css';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
