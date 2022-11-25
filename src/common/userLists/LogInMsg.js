import { useNavigate } from "react-router-dom";
import styles from "./userlist.module.css";

export default function LogInMsg() {
  let navigate = useNavigate();
  return (
    <div className={styles.login__msg}>
      <img src="/images/not-loggedin.svg" alt="image" />
      <h1>Sorry, you should login first to see this page content</h1>
      <button
        className={`${styles.login__btn} red-btn`}
        onClick={() => navigate("/landing")}
      >
        Login
      </button>
    </div>
  );
}
