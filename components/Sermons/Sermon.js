import styles from './Sermon.module.css';
import Header from '../Header/Header';
import React from 'react';
import Layer1 from './Layer1';
import Footer from '../Footer/Footer';
import Layer2 from './Layer2';
import {useState, useEffect} from 'react' 
import { OverlappingFieldsCanBeMergedRule } from 'graphql';

const Sermon = ({posts}) => {

    const [ordered, setOrdered] = useState("oldest")
    const [thePosts, setThePosts] = useState(posts)

    useEffect(() => {
       ordered == "latest" ? setThePosts(thePosts = posts.reverse()) : ordered == "oldest" ? setThePosts(thePosts = posts.reverse()) : null
    }, [ordered, setOrdered])

    return (
       <>
       {/* <div className={styles.headerBack}> */}
       <Header effect={true} />
       {/* </div> */}
        <section className={styles.container}>
            <Layer1 value={ordered} setValue={setOrdered} />
        </section>
        <Layer2 posts={thePosts}/>
        <Footer />
       </>
    )
}

export default Sermon
