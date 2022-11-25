import styles from "../aside.module.css";
import { FaHome, FaFireAlt, FaThumbsUp } from "react-icons/fa";
import { FiFilm } from "react-icons/fi";
import { BiCameraMovie } from "react-icons/bi";
import { MdMovieFilter } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function Geners() {
  let navigate = useNavigate()
  return (
    <>
    <ul className={styles.geners}>
      <li onClick={() => navigate('/home')}>
        <span><FaHome /></span> <span>HOME</span>
      </li>
      <li onClick={() => navigate('/new')}>
        <span><FaFireAlt /></span> <span>NEW RELEASES</span>
      </li>
      <li onClick={() => navigate('/popular')}>
        <span><FaThumbsUp /></span> <span>POPULAR</span>
      </li>
      <li onClick={() => navigate('/movies')}>
        <span><FiFilm /></span> <span>MOVIES</span>
      </li>
      <li onClick={() => navigate('/series')}>
        <span><BiCameraMovie /></span> <span>SERIES</span>
      </li>
      <li onClick={() => navigate('/anime')}>
        <span><MdMovieFilter /></span> <span>ANIME</span>
      </li>
      
    </ul>
    </>
  );
}
