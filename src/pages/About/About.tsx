import Card from "../../components/Card/Card";
import styles from "./About.module.css";
import { ReactComponent as Vector } from "../../images/triangle_vectors.svg";
import MyTimeline from "../../components/Timeline/Timeline";

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.values}>
        <h1>People-First Approach</h1>
        <div className={styles.cardWrapper}>
          <Card
            title="User Focus"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          />
          <Card
            title="Client Focus"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          />
          <Card
            title="Team Focus"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          />
        </div>
      </section>
      <section className={styles.timeline}>
        <div className={styles.header}>
          <div className={styles.circle} />
          <h1>Timeline</h1>
        </div>
        <MyTimeline />
      </section>
      <section className={styles.connect}>
        <div className={styles.header}>
          <Vector />
          <h1>Follow & Connect</h1>
          <Vector />
        </div>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/karissaphillips"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>&#124;</span>
          <a href="https://github.com/karisP" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>&#124;</span>
          <a href="https://theprecisedev.com/" target="_blank" rel="noreferrer">
            Blog
          </a>
          <span>&#124;</span>
          <a href="mailto: kpdevelopment313@gmail.com">Email</a>
        </div>
      </section>
    </div>
  );
};

export default About;
