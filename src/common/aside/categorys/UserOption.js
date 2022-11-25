import {BsFillHeartFill , BsFillEyeFill} from "react-icons/bs";
import {MdSubscriptions , } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styles from "../aside.module.css";

export default function UserOption() {
  let navigate = useNavigate()
  return (
    <ul className={styles.geners}>
      <li onClick={() => navigate('/watchlist')}>
        <span>
          <MdSubscriptions />
        </span>
        <span>WATCHLIST</span>
      </li>
      <li onClick={() => navigate('/favorite')}>
        <span>
          <BsFillHeartFill />
        </span>
        <span>FAVORITES</span>
      </li>
      
    </ul>
  );
}
