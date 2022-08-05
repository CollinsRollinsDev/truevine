import styles from "./LastLayer.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import react, {useState, useEffect} from 'react'

const LastLayer = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <section data-aos="zoom-in" className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.first}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
            //   width="3.5rem"
            //   height="100%"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            <div className={styles.firstText}>Location</div>
          </div>
          <div className={styles.second}>
            <p>6, Enilolobo Street,</p>
            <p>Dopemu, Agege</p>
            <p>Lagos, Nigeria</p>
          </div>
          
        </div>

        <div className={styles.subContainer}>
          <div className={styles.first}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
            //   width="3.5rem"
            //   height="100%"
              viewBox="0 0 24 24"
            >
              <path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
            </svg>
            <div className={styles.secondText}>Servces Time</div>
          </div>
          <div className={styles.second}>
            <p>Wednesdays at 6:30PM - 7:30PM [Bible Study]</p>
            <p>First Fridays at 11:00pm [Night Vigil]</p>
            <p>Sundays at 8:00AM [Sunday Worship Service]</p>
          </div>
        </div>

        <div className={styles.subContainer}>
          <div className={styles.first}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
            //   width="3.5rem"
            //   height="100%"
              viewBox="0 0 24 24"
            >
              <path d="M19.619 21.671c-5.038 1.227-8.711-1.861-8.711-5.167 0-3.175 3.11-5.467 6.546-5.467 3.457 0 6.546 2.309 6.546 5.467 0 1.12-.403 2.22-1.117 3.073-.029 1 .558 2.435 1.088 3.479-1.419-.257-3.438-.824-4.352-1.385zm-10.711-5.167c0-4.117 3.834-7.467 8.546-7.467.886 0 1.74.119 2.544.338-.021-4.834-4.761-8.319-9.998-8.319-5.281 0-10 3.527-10 8.352 0 1.71.615 3.391 1.705 4.695.047 1.527-.851 3.718-1.661 5.313 2.168-.391 5.252-1.258 6.649-2.115.803.196 1.576.304 2.328.363-.067-.379-.113-.765-.113-1.16z" />
            </svg>
            <div className={styles.secondText}>Get In Touch</div>
          </div>
          <div className={styles.second}>
            {/* <p>Email us @ <a href="mailto:support@wifispace.com.ng">truevine-support</a></p> */}
            <p>contact us via <a href="tel:+2348038335315">0803 833 5315</a></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LastLayer;
