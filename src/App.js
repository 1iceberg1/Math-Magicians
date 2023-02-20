import {
  BrowserRouter, Routes, Route, Outlet, Link,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import './App.css';

function Navbar() {
  return (
    <ul className="navbar">
      <li className="navTitle">Math Magicians</li>
      <li className="navLink"><Link to="/">Home</Link></li>
      <li className="navLink"><Link to="/calculator">Calculator</Link></li>
      <li className="navLink"><Link to="/quote">Quote</Link></li>
      <Outlet />
    </ul>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<div>Quote</div>} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
