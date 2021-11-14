import React, {useState, useEffect} from 'react'
import styles from './ShowComments.module.css';
import Image from 'next/image'

const ShowComments = ({slug, watcher}) => {
    const [comments, setComments] = useState([])

    const getComments = async() => {
        const res = await fetch(`/api/get-comment?slug=${slug}`);
        const data = await res.json();
        setComments(data.data)
        console.log(comments)
    }

    console.log(comments)

    useEffect(() => {
        getComments()
        console.log(watcher)
    }, [watcher])

    const displayComments = comments.comments ? comments.comments.map((comment, index) => (
        <section key={index} className={styles.personComment}>
        <div className={styles.avatarSpace}>
            <Image 
            src="/sermon2.jpg"
            alt=""
            layout="fill"
            quality={50}
            />
        </div>
        <div className={styles.textSpace}>
        {comment.comment[0].name} says: <span>{comment.comment[0].content}</span>
        </div>
    </section>
    )) : null


    return (
        <section className={styles.container}>
            <section className={styles.commentArea}>
               {displayComments}
            </section>
        </section>
    )
}

export default ShowComments
