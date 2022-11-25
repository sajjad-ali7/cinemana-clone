import styles from "./aside.module.css";
import Geners from "./categorys/geners";
import UserOption from "./categorys/UserOption";
import SocialMedia from "../socialMedia/inedx";
import { FaBars } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { setHover, setIncreaseSize } from "../../redux/features/asideSlice";

export default function Aside() {
  let dispatch = useDispatch();
  let { increaseSize, hover } = useSelector((state) => state.aside.value);
  return (
    <aside
      onMouseLeave={() => dispatch(setHover(false))}
      onMouseEnter={() => dispatch(setHover(true))}
      className={`${
        increaseSize || hover ? styles.increase : ""
      } desktop_aside`}
    >
      <div className={styles.logo}>
        <img src="/images/cinemana.svg" alt="logo" />
        <div>
          Cinemana
          <span
            onClick={() => {
              dispatch(setIncreaseSize());
              dispatch(setHover(false));
            }}
          >
            <FaBars />
          </span>
        </div>
      </div>

      <Geners />
      <UserOption />
      <SocialMedia/>
    </aside>
  );
}
