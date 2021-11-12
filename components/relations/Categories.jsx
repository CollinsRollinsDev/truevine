import React, {useState, useEffect} from 'react'
import { getCategories } from '../ApiRequests/getSermonPageBlogs';
import styles from './Categories.module.css'
import Link from 'next/link';


const Categories = () => {
    const [theCategories, setTheCategories] = useState([]);

    useEffect(() => {
       getCategories().then(result => setTheCategories(result))
    }, [])

    // console.log("categories is: ", theCategories)

    const mappedCategories = theCategories.map(cat => (
        <Link key={cat.slug} href="/" passHref>
        <div>{cat.name}</div>
    </Link> 
    ))

    return (
        <section className={styles.container}>
            <h1>Categories</h1>
            <section className={styles.mapped}>
              {mappedCategories}
            </section>
        </section>
    )
}

export default Categories
