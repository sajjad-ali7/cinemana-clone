import React from "react";
import styles2 from "./popular.module.css";

export default function Filter({ active, setActive, type, setType }) {
  let onButtonClick = (e, state, setState) => {
    let data = e.target.getAttribute("data-src");
    if (data === state) return;
    setState(e.target.getAttribute("data-src"));
  };

  return (
    <div className={styles2.filter__wrapper}>
      <div className={styles2.filter}>
        <button
          data-src="movie"
          className={type === "movie" ? styles2.active : ""}
          onClick={(e) => onButtonClick(e, type, setType)}
        >
          Movie
        </button>
        <button
          data-src="tv"
          className={type === "tv" ? styles2.active : ""}
          onClick={(e) => onButtonClick(e, type, setType)}
        >
          Series
        </button>
      </div>
      {/* {///////////////////////////////////////////////////////////////} */}
      <div className={styles2.filter}>
        <button
          data-src="week"
          className={active === "week" ? styles2.active : ""}
          onClick={(e) => onButtonClick(e, active, setActive)}
        >
          Week
        </button>
        <button
          data-src="day"
          className={active === "day" ? styles2.active : ""}
          onClick={(e) => onButtonClick(e, active, setActive)}
        >
          Day
        </button>
      </div>
    </div>
  );
}
