import styles from "./Home.module.css";
import resume from "../../assets/KarissaPhillipsResume.pdf";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <span>Hi, I'm</span>
        <span>Karissa Phillips</span>
        <span>Frontend Engineer & Mentor</span>
        <button
          id="desktop"
          type="submit"
          onClick={() => window.open(resume)}
          value="KarissaPhillipsResume"
        >
          View My Resume
        </button>
      </div>
      <div>
        <div className={styles.image}></div>
      </div>
      <button
        id="mobile"
        type="submit"
        onClick={() => window.open(resume)}
        value="KarissaPhillipsResume"
      >
        View My Resume
      </button>
    </div>
  );
};

export default Home;
