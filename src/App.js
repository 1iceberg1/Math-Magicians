import {
  BrowserRouter, Routes, Route, Outlet, Link,
} from 'react-router-dom';
import Calculator from './components/calculator';
import './App.css';

function Navbar() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
      <Outlet />
    </ul>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<div>Home</div>} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<div>Quote</div>} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
