import * as React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <div className={styles.container}>
            <div>
            <div>
                <p>Work Experience</p>
                <ul>
                    <li>React.js</li>
                    <li>Typescript</li>
                    <li>Sass</li>
                    <li>GraphQL</li>
                    <li>.NET</li>
                    <li>Figma Design</li>
                    <li>Visual Studio</li>
                </ul>
            </div>
            <div>
                <p>School Experience</p>
                <ul>
                    <li>Angular</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>Github</li>
                </ul>
            </div>
            <div>
                <p>Personal Interest</p>
                <ul>
                    <li>Android Studio</li>
                    <li>React Native</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Skills;