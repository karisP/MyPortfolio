import { ProjectData } from "../../pages/Projects/data";
import SkillPill from "../SkillPill/SkillPill";
import styles from "./Project.module.css";

const Project = ({ title, image, link, skills }: ProjectData) => {
  const divStyle = {
    backgroundImage: "url(" + image + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <a
      className={styles.container}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.image} style={divStyle} />
      <div className={styles.content}>
        <p>{title}</p>
        <div className={styles.skills}>
          {skills.map((s, index) => (
            <SkillPill key={index} text={s} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default Project;
