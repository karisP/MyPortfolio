import * as React from 'react';
import styles from './Home.module.css';
// import profile from '../../images/profilepic.jpg';

const Home = () => {
    return(
        <div className={styles.container}>
            <div><span>This</span><span>Is</span><span>Me</span></div>
            <div>
                <div className={styles.image}></div>
                <div className={styles.name}><span>Karissa</span><span>Phillips</span></div>
            </div>
        </div>
    )
}

export default Home;