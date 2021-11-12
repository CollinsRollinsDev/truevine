import styles from './Sermon.module.css';
import Header from '../Header/Header';
import React from 'react';
import Layer1 from './Layer1';
import Footer from '../Footer/Footer';
import Layer2 from './Layer2';

const Sermon = ({posts}) => {
    return (
       <>
       {/* <div className={styles.headerBack}> */}
       <Header />
       {/* </div> */}
        <section className={styles.container}>
            <Layer1 />
        </section>
        <Layer2 posts={posts}/>
        <Footer />
       </>
    )
}

export default Sermon
