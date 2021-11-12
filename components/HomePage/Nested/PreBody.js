import styles from "./PreBody.module.css";
import Image from "next/image";
import { slider } from "./ImageSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";

const PreBody = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  let [wordFill, setWordFill] = useState()
  const [current, setCurrent] = useState(0);
  const length = slider.length;

  const text2 = {
   
 };
 const text3 = {
  
 };
 const span2 = {
   color: "yellow",
 };
 const ulStyle = {
  //  color: "var(--whiteTogrey)",
  //  textShadow: "2px 2px 3px black, -2px -2px 3px black",
 };

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

//   const displayImages = 

  return (
    <>
      {/* Overall Parent Container */}
      <section data-aos="fade-down" className={styles.container}>
        <div className={styles.overlay}>
        {slider.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
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
                  z-index:1;
                  height: 50%;
                  width: 60%;
                  background-color: white;
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
                  position: absolute;
                  top: 60%;
                  z-index:1;
                  height: fit-content;
                  padding: 2;
                  background-color: transparent;
                  text-align: center;
                  font-weight: 700;
                  width: 100%;
                  font-family: "Lobster Two", cursive;
                  font-size: 1.7rem;
                  color: white;
                  text-shadow: 1px 1px 3px black;
                }
                .ultrans.activate {
                  opacity: 1;
                  transition-delay: 0.4s;
                  transition-duration: 0.8s;
                  // transform: scaleY(2.08%);
                  
                }

                .slide {
                  opacity: 0;
                  transition-duration: 0.7s ease;
                }
                .slide.active {
                  opacity: 1;
                  transition-duration: 0.7s;
                }

  @media screen and (max-width: 872px) {
    .ultrans {
      font-size: 1.2rem;
    }
  }
              `}
            </style>

            {/* {index === current && <img src={slide.image} alt={slide.alt} />} */}

            {index === current && (
              <Image src={slide.image} alt={slide.alt} layout="fill" priority quality="60" />
            )}
            <div  className={index === current ? "ultrans activate" : "ultrans"}
                  style={
                    current === 1 ? ulStyle : current === 2 ? ulStyle : null
                  }>
            <div style={current === 1 ? text2 : current === 2 ? text3 : null}>
                {slide.textFill}
              </div>
            </div>
          </div>
        );
      })}

        </div>

        <div className={styles.words}>
          <p className={styles.head}>Welcome to Truevine Christian Centre</p>
          {/* <p className={styles.subHead}>{wordFill}</p> */}
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
