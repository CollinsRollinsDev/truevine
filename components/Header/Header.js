import styles from "./Header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from 'next/image';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const scrollFunction = () => {
    window.scrollY >= 50 ? setNavBar(true) : setNavBar(false)
    // console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction)
  }, [])



  const handleClick = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const menuDisplay = (
    <section className={styles.bgMenu}>
      <section className={styles.menu}>
        <div>Home</div>
        <div>Sermon</div>
        <div>Services</div>
        <div>About</div>
        <div>Contact</div>
        <Link href="/login">
        <div>Login</div>
        </Link>
        <Link href="/signup">
        <div>Register</div>
        </Link>
      </section>
    </section>
  );

  return (
    <>
    <section className={navBar ? 'container active' : 'container'}>
      <div className={styles.desktop}>
        <div className={styles.logoDiv}>
          {/* <img src="/churchLogo1.png" alt="" /> */}
           <Image src="/churchLogo1.png" alt="Church Logo" width='100%' height='70%' layout="responsive"/>

        </div>
        <div className={styles.menuContainer}>
          <li>Home</li>
          <li>Sermons</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
          <Link href="/login">
            <li>Login</li>
          </Link>
          <Link href="/signup">
            <li>Register</li>
          </Link>
        </div>
      </div>

      <div  className={styles.mobile}>
        <div onClick={handleClick} className={navBar ? 'menuDiv active' : 'menuDiv'}>
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
          <Image src="/churchLogo1.png" alt="Church Logo" width='90%' height='60%' layout="responsive"/>

            </div>
        </div>
        <div className={navBar ? 'profile active' : 'profile'}>
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
        }
        .container.active{
          width: 100%;
          height: 90px;
          background-color: brown;
          position: fixed;
          z-index: 1;    
        }
        @media screen and (max-width: 872px) {
          .container{
            height: 50px;
          }
          .container.active{
            height: 50px;
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
       .profile{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        fill: brown;
     }
     .profile.active{
      fill:white;
   }
        }
      `}
    </style>
    </>
  );
};

export default Header;
