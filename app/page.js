import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <div className={styles.hero}>
      <div className={styles.herocentre}>
        <div />
        <div className={styles.herotitle}>
          <p className={styles.herowelcome}>Welcome to</p>
          <div className={styles.herochurchname}>
            <p className={styles.herochurchinitials}>PCA</p>
            <p className={styles.herochurch}>Church</p>
          </div>
        </div>
        <div className={styles.herotimings}>
          <div className={styles.herotimingssundayservice}>
            <p className={styles.herotimingstitle}>Sunday Service:</p>
            <p className={styles.herotimingstime}>9AM - 11:30AM</p>
          </div>
          <div className={styles.herotimingssundayschool}>
            <p className={styles.herotimingstitle}>Sunday School:</p>
            <p className={styles.herotimingstime}>11:30AM - 12PM</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
