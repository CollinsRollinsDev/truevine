import styles from './Sermon.module.css';
import Header from '../Header/Header';
import React from 'react';
import Layer1 from './Layer1';

const Sermon = () => {
    return (
       <>
       {/* <div className={styles.headerBack}> */}
       <Header />
       {/* </div> */}
        <section className={styles.container}>
            <Layer1 />
            {/* <div>
                <a href="hsjsssss"><img src="https://whatever.com/text="jacgdjcac" alt="jmcjgj" /></a>
            </div> */}
        </section>
       </>
    )
}

export default Sermon
