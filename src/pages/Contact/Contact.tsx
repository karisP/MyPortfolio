import * as React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <div>Github</div>
                    <div>
                        <div>Work Account</div>
                        <a href="https://github.com/KP-zbox">https://github.com/KP-zbox</a>
                        <div>Personal Account</div>
                        <a href="https://github.com/karisP">https://github.com/karisP</a>
                    </div>
                </div>
                <div>
                    <div>LinkedIn</div>
                    <a href="https://www.linkedin.com/in/karissaphillips/">https://www.linkedin.com/in/karissaphillips/</a>
                </div>
                <div>
                    <div>Email</div>
                    <div>kpdevelopment313@gmail.com</div>
                </div>
            </div>
            <p>Wanna Connect? I'd love to meet you!</p>
        </div>
    )
}

export default Contact;