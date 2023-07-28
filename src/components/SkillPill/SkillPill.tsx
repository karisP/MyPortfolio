import styles from "./SkillPill.module.css";

const SkillPill = ({ text }) => {
  return <div className={styles.container}>{text}</div>;
};

export default SkillPill;
