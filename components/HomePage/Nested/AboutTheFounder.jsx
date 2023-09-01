import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import styles from './AboutTheFounder.module.css';
import Image from 'next/image'


const AboutTheFounder = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <div>
            <div className={styles.aboutTheFounder}>
                <div className={styles.aboutTheFounderContainer}>
                    <div className={styles.aboutTheFounderText}>
                        <h1 data-aos="fade-up">About the Founder</h1>
                        <div className={styles.aboutTheFounderImage}>
                            <Image
                                src="/founder.jpg"
                                alt="About the Founder"
                                width={200}
                                height={200}
                                placeholder='blur'
                                blurDataURL='/founder.jpg'
                            />
                        </div>
                        <p>
                            <b>Pastor Jude Eke</b> is the visionary and founding pastor of Truevine Christian Centre, a place where faith, hope, and love converge to transform lives. With a heart full of compassion and a passion for spreading the Gospel, Pastor Jude has dedicated his life to guiding and nurturing the spiritual growth of individuals and families in our community.
                        </p>
                        <p>
                            Pastor Jude{`'`}s journey in ministry is marked by unwavering dedication, an unquenchable thirst for knowledge, and an unshakable faith in God{`'`}s grace. His teaching style combines the timeless wisdom of the Scriptures with practical insights for modern living, making the Word of God accessible and relevant to all.
                        </p>
                        <p>
                            Under Pastor Jude{`'`}s leadership, Truevine Christian Centre has become a beacon of light, a place where people from all walks of life gather to worship, learn, and grow in their relationship with God. His commitment to community outreach and social justice initiatives demonstrates his belief that faith should be a catalyst for positive change, both within and beyond the church walls.
                        </p>
                        <p>
                            Pastor Jude Eke invites you to join the Truevine Christian Centre family, where you{`'`}ll find a warm and welcoming community, a place to discover your purpose, and a spiritual home where you can experience the incredible power of God{`'`}s love. Come, be a part of our journey, as we grow together in faith, hope, and love.
                        </p>
                        {/* <button data-aos="fade-up">Read More</button> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutTheFounder