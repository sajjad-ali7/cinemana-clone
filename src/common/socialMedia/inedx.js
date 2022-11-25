import styles from "./social_media.module.css";

import {
  BsYoutube,
  BsInstagram,
  BsTelegram,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";
export default function SocialMedia() {
  return (
    <ul className={`${styles['social__parent']}`}>
      <li>
        <BsFacebook />
      </li>
      <li>
        <BsYoutube />
      </li>
      <li>
        <BsInstagram />
      </li>
      <li>
        <BsTelegram />
      </li>
      <li>
        <BsTwitter />
      </li>
    </ul>
  );
}
