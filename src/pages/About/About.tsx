import Card from "../../components/Card/Card";
import styles from "./About.module.css";
import { ReactComponent as Vector } from "../../images/triangle_vectors.svg";
import MyTimeline from "../../components/Timeline/Timeline";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <section className={styles.values}>
        <h1>People-First Approach</h1>
        <div className={styles.cardWrapper}>
          <Card
            title="User Focus"
            text="I am passionate about delivering intuitive user interfaces that exceed expectations. My skills in implementing pixel-perfect designs have earned me a reputation for delivering high-quality work. Having been trained in WCAG, I advocate for accessibilty because all users deserve a great experience."
          />
          <Card
            title="Client Focus"
            text="I prioritize client satisfaction and excel at tailoring presentations to ensure clear communication of project progress and team achievements to both technical and non-technical audiences. I have had great experiences working with client designers and quality engineers."
          />
          <Card
            title="Team Focus"
            text="I advocate for cross-role communication between designers, quality engineers, delivery leads, and software teams. I believe that every person involved in the software development cycle is vital to the product's success, and I am always looking for opportunities to collaborate with others to create exceptional user experiences. "
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
          <a href="mailto: kpdevelopment313@gmail.com">Email</a>
        </div>
      </section>
    </div>
  );
};

export default About;
