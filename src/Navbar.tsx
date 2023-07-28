import * as React from "react";
import styles from "./Navbar.module.css";
import { NavLink, useHistory } from "react-router-dom";
import close from "./images/close.svg";
import menu from "./images/menu.svg";

const Navbar = () => {
  const history = useHistory();
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const onToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  let currentPage = "";
  if (history.location.pathname === "/projects") {
    currentPage = "Projects";
  } else if (history.location.pathname === "/skills") {
    currentPage = "Skills";
  } else if (history.location.pathname === "/about") {
    currentPage = "About";
  }
  console.log(openMenu, history);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={onToggleMenu}>
          <img src={menu} alt="menu" />
        </button>
        <div>{currentPage}</div>
      </div>
      {openMenu ? (
        <div className={styles["mobile-menu"]}>
          <button onClick={onToggleMenu}>
            <img src={close} alt="close" />
          </button>
          <div>
            <NavLink
              exact
              to="/"
              activeClassName={styles.selected}
              onClick={() => onToggleMenu()}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName={styles.selected}
              onClick={() => onToggleMenu()}
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              activeClassName={styles.selected}
              onClick={() => onToggleMenu()}
            >
              Skills
            </NavLink>
            <NavLink
              to="/about"
              activeClassName={styles.selected}
              onClick={() => onToggleMenu()}
            >
              About
            </NavLink>
          </div>
        </div>
      ) : null}
      <div className={styles["desktop-menu"]}>
        <NavLink exact to="/" activeClassName={styles.selected}>
          Home
        </NavLink>
        <NavLink to="/projects" activeClassName={styles.selected}>
          Projects
        </NavLink>
        <NavLink to="/skills" activeClassName={styles.selected}>
          Skills
        </NavLink>
        <NavLink to="/about" activeClassName={styles.selected}>
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
