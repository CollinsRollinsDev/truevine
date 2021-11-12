import AOS from "aos";
import "aos/dist/aos.css";
import react, {useState, useEffect} from 'react'
import styles from './Layer1.module.css';
import Layer2 from './Layer2';


const Layer1 = ({setValue}) => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);    

    return (
        <section data-aos="fade-down" className={styles.container}>
            <h1>Our Sermons</h1>

            <section data-aos="fade-right"
          data-aos-delay="600" className={styles.sortSec}>
                <select onChange={e => setValue(e.target.value)}>
                    <option value="oldest">Sort by Oldest</option>
                    <option value="latest">Sort by Latest</option>

                </select>
            </section>
        </section>
    )
}

export default Layer1
