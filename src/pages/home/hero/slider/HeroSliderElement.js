import styles from "./hero_slider.module.css";
import { deviceWidth } from ".";
import api from "../../../../apiKey";
import { useDispatch } from "react-redux";
import { onMovieSelect } from "../../../../redux/features/heroSliderSlice";
import { slideItemClasses } from "../../../../helper";

export default function SliderElement({ backdropPath, name, id }) {
  let dispatch = useDispatch();
  return (
    <div
      id={id}
      style={{ backgroundImage: `url(${api.imagePath}${backdropPath})` }}
      className={slideItemClasses(deviceWidth, styles)}
      onClick={() => dispatch(onMovieSelect(id))}
    >
      <p>{name}</p>
    </div>
  );
}
