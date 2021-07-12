import styles from "./PreBody.module.css";
import Image from "next/image";
import { slider } from "./ImageSlider";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";

const PreBody = () => {
  const [current, setCurrent] = useState(0);
  const length = slider.length;

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });
  useEffect(() => {
    const x = setInterval(() => {
      autoPlayRef.current();
    }, 4000);
    return () => clearInterval(x);
  }, []);

  const displayImages = slider.map((slide, index) => {
    return (
      <div className={index === current ? "slide active" : "slide"} key={index}>
        {index === current && (
          <Image
            className={styles.transImg}
            src={slide.image}
            alt={slide.alt}
            layout="fill"
            priority
          />
        )}

        <style jsx>
          {`
            .slide {
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0;
            }

            .slide img {
              height: 100%;
              width: 100%;
            }
            .slide .textArea {
              position: absolute;
              top: 30%;
              left: 10%;
              width: 60%;
            }
            .slide .textArea h2 {
              font-size: 33px;
              color: var(--defaultTextColor);
            }
            .slide .textArea h4 {
              font-size: 14px;
              margin-top: 1%;
              color: var(--defaultTextColor);
            }
            .slide .textArea ul {
              margin-top: 2%;
              list-style: none;
            }
            .slide .textArea h4 .pricing {
              padding-left: 1%;
              color: var(--headingColor);
            }
            .slide .textArea .ulDiv {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 60%;
              margin-top: 2%;
              font-size: 17px;
            }
            .slide .textArea .ulDiv ul {
              list-style: none;
              color: var(--defaultTextColor);
            }
            .slide .textArea .ulDiv ul li {
              margin-top: 2%;
            }

            .ultrans {
              opacity: 0;
              transition-duration: 1s ease;
            }
            .ultrans.activate {
              opacity: 1;
              transition-delay: 0.4s;
              transition-duration: 0.8s;
              // transform: scaleY(2.08%);
            }

            .slide {
              opacity: 0;
              transition-duration: 1s ease;
            }
            .slide.active {
              opacity: 1;
              transition-duration: 1s;
            }
          `}
        </style>
      </div>
    );
  });

  return (
    <>
      {/* Overall Parent Container */}
      <section className={styles.container}>
        <div className={styles.overlay}>{displayImages}</div>

        <div className={styles.words}>
          <p className={styles.head}>Welcome to Truevine Christian Centre</p>
          <p className={styles.subHead}>Where the word defines us</p>
          <div className={styles.buttonsDiv}>
            <button>Book Appiontments</button>
            <button>Donate</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreBody;
