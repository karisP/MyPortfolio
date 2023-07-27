import { ProjectData } from "../../pages/Projects/data";
import styles from "./Project.module.css";

const Project = ({ title, image, link, skills }: ProjectData) => {
  return (
    <div className={styles.container}>
      <div className={styles.image} style={{ backgroundImage: `${image}` }} />
      <div>
        <p>{title}</p>
        <div className={styles.skills}></div>
      </div>
    </div>
  );
};

export default Project;
