import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-links-wrapper">
        <div className="nav-link">
          <NavLink exact to="/">
            <FontAwesomeIcon icon="fa-solid fa-house" />
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/fa-size">
            <FontAwesomeIcon icon="fa-solid fa-text-height" />
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/fa-styling">
            <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/fa-animations">
            <FontAwesomeIcon icon="fa-solid fa-tv" />
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/fa-pull">
            <FontAwesomeIcon icon="fa-solid fa-gift" />
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/fa-transformations">
            <FontAwesomeIcon icon="fa-solid fa-person-through-window" />
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/fa-brands">
            <FontAwesomeIcon icon="fa-brands fa-bitcoin" />
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/fa-custom-temp">
            <FontAwesomeIcon icon="fa-solid fa-dice-d20" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
