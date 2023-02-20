import {
  Outlet, Link,
} from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <li className="navTitle">Math Magicians</li>
    <ul className="navLink">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
    <Outlet />
  </nav>
);

export default Navbar;
