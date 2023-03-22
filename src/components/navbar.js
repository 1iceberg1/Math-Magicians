import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar" data-testid="navbar">
    <h1 className="navTitle">Math Magicians</h1>
    <ul className="navLink">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
    <nav className="hamburger">
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </nav>
  </nav>
);

export default Navbar;
