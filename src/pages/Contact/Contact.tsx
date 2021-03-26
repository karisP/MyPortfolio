import * as React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <p>Github</p>
                    <div>Work Account</div>
                    <div>https://github.com/karisP</div>
                    <div>Personal Account</div>
                    <div>https://github.com/karisP</div>
                </div>
                <div>
                    <p>LinkedIn</p>
                    <div>https://www.linkedin.com/in/karissaphillips/</div>
                </div>
                <div>
                    <p>Email</p>
                    <div>kpdevelopment313@gmail.com</div>
                </div>
            </div>
            <p>Wanna Connect? I'd love to meet you!</p>
        </div>
    )
}

export default Contact;