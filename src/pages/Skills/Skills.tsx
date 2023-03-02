import styles from './Skills.module.css';

const Skills = () => {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <div>Work Experience</div>
                    <div>
                        <span>*React.js</span>
                        <span>*Typescript</span>
                        <span>*Sass</span>
                        <span>*GraphQL</span>
                        <span>*.NET</span>
                        <span>*Figma Design</span>
                        <span>*Visual Studio</span>
                        <span>*React Material UI</span>
                        <span>*React Testing Library</span>
                        <span>*Storybook</span>
                        <span>*Swagger</span>
                        <span>*Agile Development</span>
                    </div>
                </div>
                <div>
                    <div>School Experience</div>
                    <div>
                        <span>*Angular</span>
                        <span>*Javascript</span>
                        <span>*HTML</span>
                        <span>*CSS</span>
                        <span>*Node</span>
                        <span>*Express</span>
                        <span>*SQL</span>
                        <span>*Github</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;