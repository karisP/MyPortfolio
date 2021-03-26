import * as React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.container}>
            <div>
            <div>
                <p>For Work</p>
                <div className={styles.acd}></div>
                <div className={styles.brushwatson}></div>
                <div className={styles.zbox}></div>
            </div>
            <div>
                <p>For School</p>
                <div className={styles.planimal}></div>
                <div></div>
            </div>
            <div>
                <p>For Fun</p>
                <div className={styles.guesshoot}></div>
                <div></div>
            </div>
            </div>
        </div>
    )
}

export default Projects;