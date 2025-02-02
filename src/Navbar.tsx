import * as React from "react";
import styles from "./Navbar.module.css";
import { useHistory } from "react-router-dom";
import close from "./images/close.svg";
import menu from "./images/menu.svg";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const history = useHistory();
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const onToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  let currentPage = "";
  if (history.location.hash === "#projects") {
    currentPage = "Projects";
  } else if (history.location.hash === "#skills") {
    currentPage = "Skills";
  } else if (history.location.hash === "#about") {
    currentPage = "About";
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>{currentPage}</div>
        <button
          onClick={onToggleMenu}
          style={openMenu ? { opacity: 0 } : undefined}
        >
          <img src={menu} alt="menu" />
        </button>
      </div>
      {openMenu ? (
        <div className={styles["mobile-menu"]}>
          <button onClick={onToggleMenu}>
            <img src={close} alt="close" />
          </button>
          <div>
            <HashLink
              smooth
              to="/#home"
              onClick={onToggleMenu}
              className={
                history.location.hash === "#home" ? styles.selected : ""
              }
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#projects"
              onClick={onToggleMenu}
              className={
                history.location.hash === "#projects" ? styles.selected : ""
              }
            >
              Projects
            </HashLink>
            <HashLink
              smooth
              to="/#skills"
              onClick={onToggleMenu}
              className={
                history.location.hash === "#skills" ? styles.selected : ""
              }
            >
              Skills
            </HashLink>
            <HashLink
              smooth
              to="/#about"
              onClick={onToggleMenu}
              className={
                history.location.hash === "#about" ? styles.selected : ""
              }
            >
              About
            </HashLink>
          </div>
        </div>
      ) : null}
      <div className={styles["desktop-menu"]}>
        <HashLink smooth to="/#home">
          Home
        </HashLink>
        <HashLink smooth to="/#projects">
          Projects
        </HashLink>
        <HashLink smooth to="/#skills">
          Skills
        </HashLink>
        <HashLink smooth to="/#about">
          About
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
