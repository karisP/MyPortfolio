import * as React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className={styles.container}>
            <NavLink to="/home" activeClassName={styles.selected}>Home</NavLink>
            <NavLink to="/projects" activeClassName={styles.selected}>Projects</NavLink>
            <NavLink to="/bio" activeClassName={styles.selected}>Bio</NavLink>
            <NavLink to="/skills" activeClassName={styles.selected}>Skills</NavLink>
            <NavLink to="/contact" activeClassName={styles.selected}>Contact</NavLink>
        </div>
    )
}

export default Navbar;