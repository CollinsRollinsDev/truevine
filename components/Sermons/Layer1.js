import React from 'react'
import styles from './Layer1.module.css';
import Layer2 from './Layer2';


const Layer1 = () => {
    return (
        <section className={styles.container}>
            <h1>Our Sermons</h1>

            <section className={styles.sortSec}>
                <select name="" id="">
                    <option value="">Sort Sermons Order</option>
                    <option value="latest">Sort by Latest</option>
                    <option value="oldest">Sort by Oldest</option>
                </select>
            </section>

            <Layer2 />
        </section>
    )
}

export default Layer1
