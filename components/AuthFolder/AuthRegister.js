import styles from './AuthRegister.module.css';
import { useState } from "react";
import Link from 'next/link';

const AuthRegister = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [firstName, setFirstNamed] = useState('')
   const [lastName, setlastName] = useState('')
   const [phoneNumber, setPhoneNumber] = useState('')



   return (
      <section className={styles.container}>
      <section className={styles.firstChild}>
        <div className={styles.bg}>
          <img src="/churchLogo1.png" alt="" />
        </div>
        <h1>Welcome to Truevine Christian Centre</h1>
        <h2>Please, Sign up to be part of us...</h2>
      </section>
      <section className={styles.secondChild}>
       <form action="" method="post">
       <input type="text" autoComplete="true" placeholder="First name"  value={firstName} onChange={e => setFirstName(e.target.value)}/>
         <input type="text" autoComplete="true" placeholder="Last name"  value={lastName} onChange={e => setlastName(e.target.value)}/>
         <input type="email" autoComplete="true" placeholder="Email or Phone Number" value={email} onChange={e => setEmail(e.target.value)}/>
         <input type="number" autoComplete="true" placeholder="mobile number"  value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
         <input type="password" autoComplete="false" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)}/>
         <input type="password" autoComplete="false" placeholder="Confirm Password"  value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
         <button type="submit">Sign me up</button>
         <div className={styles.subcription}>
           <p>Have an account?</p>
           <p>Sign In Here</p>
         </div>
         <Link href="/">
         <div className={styles.skipping}>
             Skip to website
         </div>
         </Link>
 
       </form>
      </section>
     </section>
   )
}

export default AuthRegister
