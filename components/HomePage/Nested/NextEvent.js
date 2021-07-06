import styles from "./NextEvent.module.css";
import Head from "next/head";
import {  useState, useEffect } from 'react';

const NextEvent = () => {
    const [seconds, setSeconds] = useState();
    const [minutes, setMinutes] = useState();
    const [hours, setHours] = useState();
    const [days, setDays] = useState()

 // Function that get to countdown to specific date
 const UpcomingEventTimer = async () => {
  // Setting deadline date
  let stoppageTime = new Date("Dec 10,2021 23:59:59").getTime();

  // Using set interval to continuously get the time after each one seconds
  let theTime = setInterval(() => {
    let dateNow = new Date().getTime();
    let remainingTime = stoppageTime - dateNow;
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Assigning the results to the state variable to function outside scope
    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
    setDays(days);

    // clear interval if time is up
    remainingTime < 0 ? clearInterval(theTime) : null;
  }, 1000);
};

  useEffect(() => {
    UpcomingEventTimer();
  },[])

  return (
    <section className={styles.container}>
      {/* <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap');
        </style>
      </Head> */}
      <div className={styles.first}>
        <div>Upcoming Event...</div>
        <div className={styles.eventTheme}>
            Theme: <span>Too Hot To Be Hot!</span>
        </div>
      </div>
      <div className={styles.second}>
          <div>
            Days
            <span>{days}</span>
          </div>
          <div>
            Hours
            <span>{hours}</span>
          </div>
          <div>
            Minutes
            <span>{minutes}</span>
          </div>
          <div>
            Seconds
            <span>{seconds}</span>
          </div>
      </div>
    </section>
  );
};

export default NextEvent;
