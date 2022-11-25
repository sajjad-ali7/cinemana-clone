import { useEffect, useState } from "react";
import styles from "./hero.module.css";
import { ratingColor } from "../../../helper";
import { FaPlay } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import { useSelector } from "react-redux";
import api from "../../../apiKey";
import { whenItemClicked } from "../../../helper";

import Arrows from "./arrows";
import HeroSlider from "./slider";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [selected, setSelected] = useState(null);

  let navigate = useNavigate();

  let { data, move } = useSelector((state) => state.heroSlider);

  useEffect(() => setSelected(data[move]), [data, move]);
  return (
    <div
      className={`${styles["hero__container"]}`}
      style={{
        backgroundImage: `url(${api.imagePath}${selected?.backdrop_path})`,
      }}
    >
      <div className="container">
        <div className={styles["film__container"]}>
          <div className={styles["film__description"]}>
            <div className={styles.top}>
              <p className={styles["new__release"]}>NEW RELEASE</p>
              <div className={styles["name__rating"]}>
                <h1 className={styles["movie__name"]}>{selected?.title}</h1>
                <span className={ratingColor(selected?.vote_average, styles)}>
                  <AiFillStar />
                  {selected?.vote_average}
                </span>
              </div>
              <p className={styles["movie__story"]}>{selected?.overview}</p>
            </div>
            <div className={styles.bottom}>
              <button
                className="red-btn"
                onClick={() => whenItemClicked(selected, navigate)}
              >
                <span>
                  <FaPlay />
                </span>
                Watch Now
              </button>
            </div>
          </div>
          <Arrows />
        </div>
      </div>

      <HeroSlider />
    </div>
  );
}
