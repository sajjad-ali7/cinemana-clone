import { useState } from "react";
import styles from "./home_sliders.module.css";
import { deviceWidth } from "../../home/hero/slider";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import useFetch from "../../../hooks/useFetch";
import apiObj from "../../../apiKey";
import { useNavigate } from "react-router-dom";
import {whenItemClicked} from '../../../helper'
import HomeSliderLoading from "../../../common/loading/HomeSliderLoading";
let smallMobile = window.innerWidth;

export default function HomeSlider({ dataType, searchKeys, slidername }) {
  const [flippedItem, setFlippedItem] = useState(null);

  let notFound = "Overview Not Available";

  let navigate = useNavigate();

  let { data, loading } = useFetch(dataType, searchKeys);

  if (loading) return <HomeSliderLoading/>;
  let map = data.map((e) => {
    return (
      <SwiperSlide className={"swiper-slide"} id={e.id} key={e.id}>
        <div
          className={`${styles.movie__card} swiper-slide `}
          id={e.id}
          media-type={e.media_type}
          onClick={() =>
            setFlippedItem((prev) => (prev === e.id ? null : e.id))
          }
        >
          <div
            className={`${styles.main_container} ${
              flippedItem === e.id ? styles.flip : ""
            }`}
          >
            <img src={`${apiObj.imagePath}${e.poster_path}`} alt="movie img" />
            <div>
              <p className={!e.overview ? "text-center" : ""}>
                {e.overview.split(' ').slice(0,20 || 15).join(' ') || notFound}...
              </p>
              <button className="red-btn" onClick={() => whenItemClicked(e , navigate)}>
                Watch Now
              </button>
            </div>
          </div>
          <h1 title={e.title ? e.title : e.name}>
            {e.title ? e.title : e.name}
          </h1>
          <span>
            {e.release_date
              ? e.release_date.slice(0, 4)
              : e.first_air_date?.slice(0, 4)}
          </span>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className={styles.margin} id={dataType}>
      <h1 className={styles.slider__name}>{slidername}</h1>
      <Swiper
        className={styles.swiper__container}
        navigation={deviceWidth === 20 ? true : false}
        modules={[Navigation]}
        spaceBetween={deviceWidth === 25 ? 10 : 20}
        slidesPerView={
          deviceWidth === 20 ? 5.4 : smallMobile <= 480 ? 3.4 : 4.4
        }
      >
        {map}
      </Swiper>
    </div>
  );
}
