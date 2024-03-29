import styles from "./NextEvent.module.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import {  useState, useEffect } from 'react';
import moment from 'moment'

const NextEvent = ({events}) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
    
    const [seconds, setSeconds] = useState();
    const [minutes, setMinutes] = useState();
    const [hours, setHours] = useState();
    const [days, setDays] = useState()
    let [sortedEvents, setSortedEvents] = useState([]);
    const [validEvents, setValidEvents] = useState([])

    function sortFunction(a, b) {
      var dateA = new Date(a.date).getTime();
      var dateB = new Date(b.date).getTime();
      return dateA > dateB ? 1 : -1;
    }

    const getLatestEvent = async() => {
      const newEvent = [...events]

      const validSorted = await events.filter((item) => {
        let milli = 604800000;
        let currentDate = moment();
        let date = moment(item.date);
        let result = currentDate.diff(date)
        console.log(date > currentDate)
        if(date > currentDate){
          console.log("passed")
          return item
        } else{
          setValidEvents([...validEvents, item]);
          console.log("failed")

        }

      })
      console.log(validSorted, "as validEvent")
      const sorted = validSorted.sort(sortFunction).map((event, index) => {
        return event
      })
      if(sorted){
        setSortedEvents(sortedEvents = sorted)
      }
    }

    useEffect(()=> {
      getLatestEvent()
    },[])

 // Function that get to countdown to specific date
 const UpcomingEventTimer = async () => {
  if(!events && !sortedEvents){

  } else{
    console.log(sortedEvents,"as sorted event");
      // Setting deadline date
  // let stoppageTime = new Date("Dec 10,2021 23:59:59").getTime();
  let stoppageTime = new Date(sortedEvents[0].date).getTime();

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
  }
};

  useEffect(() => {
    sortedEvents.length > 0 &&  UpcomingEventTimer();
    console.log(sortedEvents, "as sorted events")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[events, sortedEvents])

  return (
    <section data-aos="fade-up" className={styles.container}>
    {/* <section data-aos="fade-up" className={styles.container}> */}
      {/* <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap');
        </style>
      </Head> */}
      <div className={styles.first}>
        <div>Upcoming Event...</div>
        <div className={styles.eventTheme}>
            Theme: <span>{sortedEvents.length > 0 ? sortedEvents[0].theme : "None"}</span>
        </div>
      </div>
     {sortedEvents.length > 0 ?  <div className={styles.second}>
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
      </div> : <div className={styles.second}>No Event To Show</div>}
    </section>
  );
};

export default NextEvent;
