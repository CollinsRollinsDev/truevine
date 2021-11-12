import React from 'react'
import styles from './Layer1.module.css';
import Layer2 from './Layer2';


const Layer1 = ({setValue}) => {
    return (
        <section className={styles.container}>
            <h1>Our Sermons</h1>

            <section className={styles.sortSec}>
                <select onChange={e => setValue(e.target.value)}>
                    <option value="oldest">Sort by Oldest</option>
                    <option value="latest">Sort by Latest</option>

                </select>
            </section>
        </section>
    )
}

export default Layer1
