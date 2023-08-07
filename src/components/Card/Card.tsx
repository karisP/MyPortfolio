import styles from "./Card.module.css";

const Card = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{title}</div>
      <div className={styles.content}>{text}</div>
    </div>
  );
};

export default Card;
