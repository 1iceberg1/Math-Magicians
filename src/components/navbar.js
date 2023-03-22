import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" data-testid="navbar">
      <h1 className={`navTitle ${isOpen ? 'open' : ''}`}>Math Magicians</h1>
      <ul className={`navLink ${isOpen ? 'open' : ''}`}>
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
      <button type="button" className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>
    </nav>
  );
};

export default Navbar;
