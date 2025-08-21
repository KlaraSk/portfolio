import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <ul className="flex nav__list">
        <li className="nav__list-item heading-4">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "font-color-black nav__list-item-active" : " font-color-black nav__list-item-link")}
          >
            Start
          </NavLink>
        </li>
        <li className="nav__list-item heading-4">
          <NavLink
            to={"/cv"}
            className={({ isActive }) => (isActive ? "font-color-black nav__list-item-active" : " font-color-black nav__list-item-link")}
          >
            CV
          </NavLink>
        </li>
        <li className="nav__list-item heading-4">
          <NavLink
            to={"/kontakt"}
            className={({ isActive }) => (isActive ? "font-color-black nav__list-item-active" : " font-color-black nav__list-item-link")}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
