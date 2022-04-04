//importing from react router
import { Link, NavLink } from "react-router-dom";
import { useCustomization } from "../../customhooks/useCustomization";

// importing css
import "./Navbar.css";

function Navbar() {
  const { color } = useCustomization();
  return (
    <div className="navbar" style={{ backgroundColor: color }}>
      <nav>
        <Link exact to="/" className="nav-logo">
          <h1> Company Logo</h1>
        </Link>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Link to="/create-tour">Create New Tour</Link>
      </nav>
    </div>
  );
}

export default Navbar;
