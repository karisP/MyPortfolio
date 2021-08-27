import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.container}>
            <div>
            <div>
                <p>For Work</p>
                <a className={styles.acd} href="http://acdmail.com/" target="blank"><div>Made with React</div></a>
                <a className={styles.brushwatson} href="http://brushwatson.com/" target="blank"><div>Made with React and .NET</div></a>
            </div>
            <div>
                <p>For School</p>
                <a className={styles.planimal} href="https://planimal-app.herokuapp.com/#!/home" target="blank"><div>Made with Angular, Node.js, Express</div></a>
                <a className={styles.avengers} href="https://avengers-budget-app.herokuapp.com/" target="blank"><div>Made with jQuery</div></a>
            </div>
            <div>
                <p>For Fun</p>
                <a className={styles.guesshoot} href="https://guess-hoot.herokuapp.com/" target="blank"><div>Made with React and Typescript</div></a>
                <a className={styles.apple} href="https://apple-doppelganger.herokuapp.com/" target="blank"><div>Made with React and Typescript</div></a>
            </div>
            </div>
        </div>
    )
}

export default Projects;