import styles from "./AuthLogin.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const AuthLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <section className={styles.container}>
      <section className={styles.firstChild}>
        <div className={styles.bg}>
          {/* <img src="/churchLogo1.png" alt="" /> */}
          <Image
            src="/churchLogo1.png"
            alt="Church Logo"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <h1>Welcome to Truevine Christian Centre</h1>
        <h2>Please, Sign in to continue...</h2>
      </section>
      <section className={styles.secondChild}>
        <form action="" method="post">
          <input
            type="email"
            autoComplete="true"
            placeholder="Email or Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoComplete="false"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <div className={styles.subcription}>
            <p>Forgotten Password?</p>
            <p>Sign Up Here</p>
          </div>
          <Link href="/" passHref>
            <div className={styles.skipping}>Skip to website</div>
          </Link>
        </form>
      </section>
    </section>
  );
};

export default AuthLogin;
