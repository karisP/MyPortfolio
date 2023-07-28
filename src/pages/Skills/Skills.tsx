import SkillPill from "../../components/SkillPill/SkillPill";
import styles from "./Skills.module.css";
import skillsData from "./data";
import vector from "../../images/triangle_vectors.svg";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {skillsData.map((s) => (
          <SkillPill text={s} />
        ))}
        <img src={vector} className={styles.topVector} alt="decoration" />
        <img src={vector} className={styles.bottomVector} alt="decoration" />
      </div>
    </div>
  );
};

export default Skills;
