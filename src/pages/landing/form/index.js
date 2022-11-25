import { useState } from "react";
import styles from "../landing.module.css";
import LoginBtns from "../login-btns";

import { FaUserAlt, FaLock } from "react-icons/fa";
import { auth } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let signIn = () => createUserWithEmailAndPassword(auth, email, password);
  let onFormSubmit = (e) => {
    e.preventDefault();
    signIn();
  };

  return (
    <form className={styles.form} onSubmit={(e) => onFormSubmit(e)}>
      <div className={styles.flex}>
        <span>
          <FaUserAlt />
        </span>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.flex}>
        <span>
          <FaLock />
        </span>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p className={styles["forget__msg"]}>
        Forgot Password ? <span>Reset</span>
      </p>
      <button className={`red-btn ${styles.btn}`}>Sign in</button>
      <div className={styles.auth}>
        <LoginBtns />
      </div>
    </form>
  );
}
