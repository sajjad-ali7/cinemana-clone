import React from "react";
import styles from "./hero_slider.module.css";
import { slideDotsClasses } from "../../../../helper";
import { useDispatch } from "react-redux";
import { jumpTo } from "../../../../redux/features/heroSliderSlice";
export default function SlideDots({ active, setActive }) {
  let dispatch = useDispatch();
  let onDotClick = (e) => {
    let newIndex = +e.target.getAttribute("data-src");
    setActive(newIndex);
    dispatch(jumpTo(newIndex));
  };

  return (
    <ul className={styles["dots__container"]}>
      <li>
        <button
          className={slideDotsClasses(active, 0, styles)}
          data-src={0}
          onClick={(e) => onDotClick(e)}
        ></button>
      </li>
      <li>
        <button
          data-src={4}
          className={slideDotsClasses(active, 4, styles)}
          onClick={(e) => onDotClick(e)}
        ></button>
      </li>
      <li>
        <button
          className={slideDotsClasses(active, 8, styles)}
          data-src={8}
          onClick={(e) => onDotClick(e)}
        ></button>
      </li>
      <li>
        <button
          className={slideDotsClasses(active, 12, styles)}
          data-src={12}
          onClick={(e) => onDotClick(e)}
        ></button>
      </li>
      <li>
        <button
          className={slideDotsClasses(active, 16, styles)}
          data-src={16}
          onClick={(e) => onDotClick(e)}
        ></button>
      </li>
    </ul>
  );
}
