import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <span>Hi, I'm</span>
        <span>Karissa Phillips</span>
        <span>Frontend Engineer & Mentor</span>
      </div>
      <div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default Home;
