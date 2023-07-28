import { ProjectData } from "../../pages/Projects/data";
import styles from "./Project.module.css";

const Project = ({ title, image, link, skills }: ProjectData) => {
  const divStyle = {
    backgroundImage: "url(" + image + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <a className={styles.container} href={link}>
      <div className={styles.image} style={divStyle} />
      <div>
        <p>{title}</p>
        <div className={styles.skills}></div>
      </div>
    </a>
  );
};

export default Project;
