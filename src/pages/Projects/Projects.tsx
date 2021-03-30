import * as React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.container}>
            <div>
            <div>
                <p>For Work</p>
                <a href="http://acdmail.com/" target="blank"><div className={styles.acd}></div></a>
                <a href="http://brushwatson.com/" target="blank"><div className={styles.brushwatson}></div></a>
                <a href="https://www.zbox.com/" target="blank"><div className={styles.zbox}></div></a>
            </div>
            <div>
                <p>For School</p>
                <a href="https://planimal-app.herokuapp.com/#!/home" target="blank"><div className={styles.planimal}></div></a>
                <div></div>
            </div>
            <div>
                <p>For Fun</p>
                <a href="https://guess-hoot.herokuapp.com/" target="blank"><div className={styles.guesshoot}></div></a>
                <div></div>
            </div>
            </div>
        </div>
    )
}

export default Projects;