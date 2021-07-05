import styles from "./SignIn.module.css";
import { useState } from "react";
import Link from 'next/link';

const SignIn = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('')

//  const css = {
//    textDecoration: "none",
//    color: "white"
//  }

  return (
    <section className={styles.container}>
     <section className={styles.firstChild}>
       <div className={styles.bg}>
         {/* <img src="/churchLogo1.png" alt="" /> */}
       </div>
       <h1>Welcome to Truevine Christian Centre</h1>
       <h2>Please, Sign in to continue...</h2>
     </section>
     <section className={styles.secondChild}>
      <form action="" method="post">
        <input type="email" autoComplete="true" placeholder="Email or Phone Number" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" autoComplete="false" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        <div className={styles.subcription}>
          <p>Forgotten Password?</p>
          <p>Sign Up Here</p>
        </div>
        <Link href="/">
        <div className={styles.skipping}>
            Skip to website
        </div>
        </Link>

      </form>
     </section>
    </section>
  );
};

export default SignIn;
