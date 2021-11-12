import React, {useState, useEffect} from 'react'
import { getCategories } from '../ApiRequests/getSermonPageBlogs';
import styles from './Categories.module.css'
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";


const Categories = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

    const [theCategories, setTheCategories] = useState([]);

    useEffect(() => {
       getCategories().then(result => setTheCategories(result))
    }, [])

    // console.log("categories is: ", theCategories)

    const mappedCategories = theCategories.map(cat => (
        <Link key={cat.slug} href="/" passHref>
        <div data-aos="fade-up">{cat.name}</div>
    </Link> 
    ))

    return (
        <section data-aos="zoom-in" className={styles.container}>
            <h1>Categories</h1>
            <section className={styles.mapped}>
              {mappedCategories}
            </section>
        </section>
    )
}

export default Categories
