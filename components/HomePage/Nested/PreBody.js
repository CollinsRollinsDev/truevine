import styles from "./PreBody.module.css";
import Image from 'next/image';

const PreBody = () => {
   return (
      <section className={styles.container}>
         <div className={styles.overlay}></div>
      <div className={styles.words}>
        <p className={styles.head}>Welcome to Truevine Christian Centre</p>
        <p className={styles.subHead}>Where the word defines us</p>
        <div className={styles.buttonsDiv}>
           <button>Book Appiontments</button>
           <button>Donate</button>
        </div>
      </div>
      {/* <div className={styles.pics}></div> */}
      </section>
   )
}

export default PreBody
