import * as React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return(
        <div className={styles.container}>
            <div className={styles.name}>
                <span>code + design</span>
                <span>PORTFOLIO</span>
                <span>Karissa Phillips</span></div>
            <div>
                <div className={styles.image}></div>
            </div>
        </div>
    )
}

export default Home;