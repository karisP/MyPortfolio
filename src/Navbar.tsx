import * as React from 'react';
import styles from './Navbar.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import close from './images/close.svg';
import menu from './images/menu.svg';

const Navbar = () => {
    const history = useHistory();
    const [openMenu, setOpenMenu] = React.useState<boolean>(false);
    const onToggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    let currentPage = "";
    if (history.location.pathname === "/projects") {
        currentPage = "Projects";
    } else if (history.location.pathname === "/bio") {
        currentPage = "Bio";
    } else if (history.location.pathname === "/skills") {
        currentPage = "Skills";
    } else if (history.location.pathname === "/contact") {
        currentPage = "Contact";
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={onToggleMenu}><img src={menu} alt="menu" /></button>
                <div>{currentPage}</div>
            </div>
            {
                openMenu ?
                    <div className={styles['mobile-menu']}>
                        <button onClick={onToggleMenu}><img src={close} alt="close" /></button>
                        <div>
                            <NavLink exact to="/" activeClassName={styles.selected}>Home</NavLink>
                            <NavLink to="/projects" activeClassName={styles.selected}>Projects</NavLink>
                            <NavLink to="/bio" activeClassName={styles.selected}>Bio</NavLink>
                            <NavLink to="/skills" activeClassName={styles.selected}>Skills</NavLink>
                            <NavLink to="/contact" activeClassName={styles.selected}>Contact</NavLink>
                        </div>
                    </div> : null
            }
            <div className={styles['desktop-menu']}>
                            <NavLink exact to="/" activeClassName={styles.selected}>Home</NavLink>
                            <NavLink to="/projects" activeClassName={styles.selected}>Projects</NavLink>
                            <NavLink to="/bio" activeClassName={styles.selected}>Bio</NavLink>
                            <NavLink to="/skills" activeClassName={styles.selected}>Skills</NavLink>
                            <NavLink to="/contact" activeClassName={styles.selected}>Contact</NavLink>

            </div>
        </div>
    )
}

export default Navbar;