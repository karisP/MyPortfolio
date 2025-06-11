import SkillPill from "../../components/SkillPill/SkillPill";
import styles from "./Skills.module.css";
import skillsData from "./data";
import vector from "../../images/triangle_vectors.svg";

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h1>Skills</h1>
      <div className={styles.wrapper}>
        {skillsData.map((s, index) => (
          <SkillPill key={index} text={s} />
        ))}
        <img src={vector} className={styles.topVector} alt="decoration" />
        <img src={vector} className={styles.bottomVector} alt="decoration" />
      </div>
    </section>
  );
};

export default Skills;
