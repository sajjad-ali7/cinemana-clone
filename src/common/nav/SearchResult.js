import styles from "./nav.module.css";
import apiObj from "../../apiKey";
import { whenItemClicked } from "../../helper";
import { useNavigate } from "react-router-dom";

export default function SearchResult({ q, data, setInputValue }) {
  let navigate = useNavigate();
  let map = data?.map((e) => {
    return (
      <div
        className={styles.result}
        onClick={() => whenItemClicked(e, navigate)}
        key={e.id}
      >
        <img
          src={`${apiObj.imagePath}${e.poster_path || e.backdrop_path}`}
          alt="img"
        />
        <div className={styles.text}>
          <h4>{e.title || e.name}</h4>
          <p>{e.release_date?.slice(0, 4) || e.first_air_date?.slice(0, 4)}</p>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.search__result}>
      {map}
      <button onClick={() => navigate(`/search/${q}`)}>Show More</button>
    </div>
  );
}
