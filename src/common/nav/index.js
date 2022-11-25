import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./nav.module.css";

import { FaUserCircle } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { toggleUser } from "../../redux/features/checkUserLog";
import Search from "./Search";

export default function Navbar() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      dispatch(toggleUser(true));
    } else {
      dispatch(toggleUser(false));
    }
  }, [user, dispatch]);

  let signUserOut = async () => {
    await signOut(auth);
    navigate("/landing");
  };

  return (
    <nav className={styles.navigation}>
      <div className={`container ${styles["container__flex"]}`}>
        <Search />

        {user ? (
          <button className="red-btn" onClick={signUserOut}>
            <FaUserCircle />
            Log out
          </button>
        ) : (
          <button className="red-btn" onClick={() => navigate("/landing")}>
            <FaUserCircle /> Log in
          </button>
        )}
      </div>
    </nav>
  );
}
