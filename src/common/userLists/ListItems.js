import { whenItemClicked } from "../../helper";
import apiObj from "../../apiKey";
import { useNavigate } from "react-router-dom";
import styles from "./userlist.module.css";
export default function ListItems({ data }) {
  let navigate = useNavigate();

  let map = data?.map((e) => (
    <div id={e.id} key={e.id} onClick={() => whenItemClicked(e, navigate)}>
      <img src={`${apiObj.imagePath}${e.itemImg}`} alt="" />
      <h1>{e.itemTitle}</h1>
      <p>{e.ItemReleaseDate}</p>
    </div>
  ));

  return <div className={styles.parent}>{map} </div>;
}
