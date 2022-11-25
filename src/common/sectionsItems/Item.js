import styles from "./index.module.css";
import apiObj from "../../apiKey";
import { whenItemClicked } from "../../helper";
import { useNavigate } from "react-router-dom";
export default function Item({ data }) {

  let navigate = useNavigate()

  let map = data?.map((e) => (
    <div key={e.id} className={styles.item} onClick={() => whenItemClicked(e , navigate)}>
      <img src={`${apiObj.imagePath}${e.poster_path}`} alt="image" />

      <div className={styles.details}>
        <h2 title={e.name || e.title}>{e.name || e.title}</h2>
        <p>{e?.release_date?.slice(0, 4) || e?.first_air_date?.slice(0, 4)}</p>
      </div>
    </div>
  ));
  return map;
}
