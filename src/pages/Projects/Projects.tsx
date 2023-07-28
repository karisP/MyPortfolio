import Project from "../../components/Project/Project";
import styles from "./Projects.module.css";
import projectData from "./data";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {projectData.map((p) => (
          <Project
            key={p.link}
            title={p.title}
            image={p.image}
            skills={p.skills}
            link={p.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
