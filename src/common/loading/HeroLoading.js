import styles from "./loading.module.css";

export default function HeroLoading() {
  return (
    <div className={styles.hero}>
      <div className={styles.story}>
        <div className="container">
          <h1 className={styles.heading}></h1>
          <p className={styles.p}></p>
          <p className={styles.p}></p>
          <p className={styles.p}></p>
          <p className={styles.p}></p>
          <p className={styles.p}></p>
        </div>
      </div>
      <div className={styles.slider__container}>
        <div className={styles.slider}>d</div>
        <div className={styles.slider}>d</div>
        <div className={styles.slider}>d</div>
        <div className={styles.slider}>d</div>
      </div>
    </div>
  );
}
