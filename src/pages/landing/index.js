import { useEffect } from "react";
import styles from "./landing.module.css";
import { useNavigate } from "react-router-dom";
import SigninForm from "./form";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Landing({ showElements }) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) return navigate("/home");
  });

  useEffect(() => {
    showElements(false);
    return () => showElements(true);
  }, [showElements]);

  return (
    <div className={styles.bg} style={{ width: "100%" }}>
      <main className={styles.main}>
        <div className={styles["login__wrapper"]}>
          <div className={styles.logo}>
            <img src="/images/cinemana.svg" alt="cinemana-img" />
            <h1>Cinemana</h1>
          </div>
          <SigninForm />
        </div>
      </main>
      <footer className={styles["landing__footer"]}>
        <button className="red-btn" onClick={() => navigate("/home")}>
          Continue as a Guest
        </button>
      </footer>
    </div>
  );
}
