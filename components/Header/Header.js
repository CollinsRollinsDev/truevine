import styles from "./Header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = ({effect}) => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  // States
  const [toggle, setToggle] = useState(false);
  const [navBar, setNavBar] = useState(effect ? false : true);

  // Added function to change color on scroll
  const scrollFunction = () => {
    if(!effect){
      window.scrollY >= 50 ? setNavBar(true) : setNavBar(true);
    } else{
      window.scrollY >= 50 ? setNavBar(true) : setNavBar(false);
    }
    // console.log(window.scrollY)
  };

  // Bypassing NextJs Build Backend
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
  }, []);

  // Toggling Menu Icon
  const handleClick = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  // Lists for mobile view
  const menuDisplay = (
    <section className={styles.bgMenu}>
      <section className={styles.menu}>
      <Link href="/" passHref>
          <div>Home</div>
        </Link>
        <Link href="/sermon" passHref>
        <div>Sermon</div>
        </Link>
        <div>Services</div>
        <div>About</div>
        <div>Contact</div>
        <Link href="/login" passHref>
          <div>Login</div>
        </Link>
        <Link href="/signup" passHref>
          <div>Register</div>
        </Link>
      </section>
    </section>
  );

  // return function for next
  return (
    <>
      <section data-aos="zoom-in"
          data-aos-delay="600" className={navBar ? "container active" : "container"}>
        <div className={styles.desktop}>
          <div className={styles.logoDiv}>
            {/* <img src="/churchLogo1.png" alt="" /> */}
            <Image
              src="/churchLogo1.png"
              alt="Church Logo"
              width="70%"
              height="70%"
              layout="responsive"
            />
          </div>
          <div className={styles.menuContainer}>
          <Link href="/" passHref>
        <li>Home</li>
        </Link>
            <Link href="/sermon" passHref>
        <li>Sermon</li>
        </Link>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
            <Link href="/login" passHref>
              <li>Login</li>
            </Link>
            <Link href="/signup" passHref>
              <li>Register</li>
            </Link>
          </div>
        </div>

        <div className={styles.mobile}>
          <div
            onClick={handleClick}
            className={navBar ? "menuDiv active" : "menuDiv"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" />
            </svg>
          </div>
          <div className={styles.logoDiv}>
            <p>TVCC</p>
            {/* <img src="/churchLogo1.png" alt="" /> */}
            <div className={styles.imgWrapper}>
              <Image
                src="/churchLogo1.png"
                alt="Church Logo"
                width="70%"
                height="60%"
                layout="responsive"
              />
            </div>
          </div>
          <div className={navBar ? "profile active" : "profile"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80%"
              height="80%"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
            </svg>
          </div>
        </div>
        {toggle ? menuDisplay : null}
      </section>

      <style jsx>
        {`
          .container {
            width: 100%;
            height: 90px;
            background-color: transparent;
            position: fixed;
            z-index: 1;
            outline: none;
          }
          .container.active {
            width: 100%;
            height: 90px;
            background-color: brown;
            position: fixed;
            z-index: 1;
            outline: none;
          }
          @media screen and (max-width: 872px) {
            .container {
              height: 50px;
              outline: none;
            }
            .container.active {
              height: 50px;
              outline: none;
            }
            .menuDiv {
              height: 100%;
              /* width: 10%; */
              /* background-color: blue; */
              display: flex;
              justify-content: center;
              align-items: center;
              fill: brown;
              font-weight: 700;
              flex: 1;
            }
            .menuDiv.active {
              fill: white;
            }
            .profile {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              fill: brown;
            }
            .profile.active {
              fill: white;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
