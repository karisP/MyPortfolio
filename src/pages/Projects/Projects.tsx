import Project from "../../components/Project/Project";
import styles from "./Projects.module.css";
import projectData from "./data";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h1>Projects</h1>
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
    </section>
  );
};

export default Projects;
