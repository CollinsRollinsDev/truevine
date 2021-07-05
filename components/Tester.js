import { useState, useEffect } from "react";

const Tester = () => {

    const [seconds, setSeconds] = useState();
    const [minutes, setMinutes] = useState();
    const [hours, setHours] = useState();
    const [days, setDays] = useState()

     // Function that get to countdown to specific date
 const countDownToLunch = async () => {
    // Setting deadline date
    let stoppageTime = new Date("March 10,2022 23:59:59").getTime();
  
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
      // upcomingEvents();
      countDownToLunch();
    }, [])
    return (
        <div>
            {days}
            {hours}
            {minutes}
            {seconds}
        </div>
    )
}

export default Tester
