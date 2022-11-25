import styles from "./modal.module.css";
import Geners from "../common/aside/categorys/geners";
import UserOption from "../common/aside/categorys/UserOption";
import SocialMedia from "../common/socialMedia/inedx";

import { BiLeftArrowAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {toggleAside} from '../redux/features/asideSlice'

export default function Aside() {
  let { displayAside } = useSelector((state) => state.aside.value);
  let dispatch = useDispatch();

  return (
    <div
    onClick={() => dispatch(toggleAside(false))}
      className={`${styles.layer} ${
        displayAside ? "phone_aside_show" : "phone_aside_hide"
      }`}
    >
      <aside>
        <div className={styles.logo}>
          <img src="/images/cinemana.svg" alt="logo" />
          <div>
            Cinemana
            <span onClick={() => dispatch(toggleAside(false))}>
              <BiLeftArrowAlt />
            </span>
          </div>
        </div>

        <Geners />
        <UserOption/>
        <SocialMedia/>
      </aside>
    </div>
  );
}
