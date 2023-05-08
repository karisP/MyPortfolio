import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.container}>
            <div>
            <div>
                <p>For Work</p>
                <a className={styles.acd} href="http://acdmail.com/" target="blank"><div>Made with React</div></a>
                <a className={styles.brushwatson} href="http://brushwatson.com/" target="blank"><div>Made with React and .NET</div></a>
                <a className={styles.youthup} href="https://dpcyouthup.org/" target="blank"><div>Made with React, Typescript, and Material UI</div></a>
            </div>
            <div>
                <p>For Fun</p>
                <a className={styles.guesshoot} href="https://guess-hoot.herokuapp.com/" target="blank"><div>Made with React and Typescript</div></a>
                <a className={styles.apple} href="https://apple-clone-dc458.web.app/" target="blank"><div>Made with React and Typescript</div></a>
                <a className={styles.pomodoro} href="https://pom-pomodoro.web.app/" target="blank"><div>Made with React & Reddit API</div></a>
            </div>
            </div>
        </div>
    )
}

export default Projects;