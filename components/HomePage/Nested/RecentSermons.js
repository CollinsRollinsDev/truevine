import styles from "./RecentSermons.module.css";
import Image from "next/image";

const RecentSermons = () => {
  return (
    <section className={styles.container}>
      <div className={styles.head}>Recent Sermons</div>
      <div className={styles.sermonsDiv}>
        <div className={styles.sermons}>
          <div className={styles.img}>
            <Image src="/sermons.jpg" alt="Church Logo" layout="fill" />
          </div>
          <div className={styles.content}>
            <div className={styles.preacher}>
              Message by: <span>Pst. Jude Eke</span>
            </div>
            <div className={styles.message}>
              Topic: <span>Who Are You In The Lord?</span>
            </div>
          </div>
        </div>

        <div className={styles.sermons}>
          <div className={styles.img}>
            <Image src="/sermons2.jpg" alt="Church Logo" layout="fill" />
          </div>
          <div className={styles.content}>
            <div className={styles.preacher}>
              Message by: <span>Pst. Chijoke</span>
            </div>
            <div className={styles.message}>
              Topic: <span>With A Little Faith</span>
            </div>
          </div>
        </div>

        <div className={styles.sermons}>
          <div className={styles.img}>
            <Image
              className={styles.test}
              src="/sermons3.jpg"
              alt="Church Logo"
              layout="fill"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.preacher}>
              Message by: <span>Pst. Jude Eke</span>
            </div>
            <div className={styles.message}>
              Topic: <span>In Church But Not A Christian</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentSermons;
