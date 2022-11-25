import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiObj from "../../apiKey";
import styles from "./video.module.css";
export default function Cast() {
  let { id, type } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiObj.KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setData(data.cast.slice(0, 5)));

      return () => setData([])
  }, [id, type]);

  let map = data?.map((e) => {
    return (
      <div key={e.id} className={styles.profile__card} >
        <img src={`${e.profile_path ? `${apiObj.imagePath}${e.profile_path}` : '/images/Unknown_person.jpg'}`} alt="cast image" />
        <h3>{e.name}</h3>
      </div>
    );
  });
  return (
    <div className={styles.parent}>
      <h1 className={styles.cast}>Cast</h1>
      <div className={styles.cast__container}>{map}</div>
    </div>
  );
}
