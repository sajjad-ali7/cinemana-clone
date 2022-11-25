import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiObj from "../../apiKey";
import { whenItemClicked } from "../../helper";
import styles from "./suggest.module.css";
export default function Suggest() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/1396/recommendations?api_key=${apiObj.KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results.slice(0, 5)));
  }, []);

  let map = data.map((e) => (
    <div key={e.id} onClick={() => whenItemClicked(e, navigate)}>
      <img src={`${apiObj.imagePath}${e.backdrop_path}`} alt="poster" />
    </div>
  ));
  return (
    <>
      <p className={styles.suggested}>Suggested for you</p>
      <div className={styles.recommendation}>{map}</div>
    </>
  );
}
