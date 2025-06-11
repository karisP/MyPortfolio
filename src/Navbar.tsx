import * as React from "react";
import styles from "./Navbar.module.css";
import { useHistory } from "react-router-dom";
import close from "./images/close.svg";
import menu from "./images/menu.svg";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const history = useHistory();
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const [currentLink, setCurrentLink] = React.useState<string>("home");

  const onToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
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
        <HashLink
          className={currentLink === "home" ? styles.selected : ""}
          onClick={() => setCurrentLink("home")}
          smooth
          to="/#home"
        >
          Home
        </HashLink>
        <HashLink
          className={currentLink === "projects" ? styles.selected : ""}
          onClick={() => setCurrentLink("projects")}
          to="/#projects"
          smooth
        >
          Projects
        </HashLink>
        <HashLink
          className={currentLink === "skills" ? styles.selected : ""}
          onClick={() => setCurrentLink("skills")}
          to="/#skills"
          smooth
        >
          Skills
        </HashLink>
        <HashLink
          className={currentLink === "about" ? styles.selected : ""}
          onClick={() => setCurrentLink("about")}
          to="/#about"
          smooth
        >
          About
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
