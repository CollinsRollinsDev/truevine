import AOS from "aos";
import "aos/dist/aos.css";
import react, { useState, useEffect } from 'react'
import styles from './Layer1.module.css';

const Layer1 = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <section data-aos="fade-down" className={styles.container}>
            <h1>Terms of Use</h1>
        </section>
    )
}

export default Layer1

