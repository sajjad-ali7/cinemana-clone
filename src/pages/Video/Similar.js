import styles from "./video.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeSlider from "../home/homeSliders";
import apiObj from "../../apiKey";
export default function Similar() {
  let { type, id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/1396/similar?api_key=${apiObj.KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={styles.similar}>
      <h1>You May Also Like</h1>
      <HomeSlider dataType={type} searchKeys={`${id}/similar`} />
    </div>
  );
}
