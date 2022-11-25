import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiObj from "../../../apiKey";
import styles from "./collection.module.css";
export default function CollectionItem({ imagePath, id, name, overview }) {
  const [flipCard, setFlipCard] = useState(null);
  let navigate = useNavigate();
  return (
    <div
      className={styles.collection__card}
      id={id}
      style={{ backgroundImage: `url(${apiObj.imagePath}${imagePath})` }}
      onClick={() => {
        setFlipCard((prev) => (prev === id ? null : id));
      }}
    >
      <div className={`${styles.card} ${flipCard === id ? styles.flip : ""}`}>
        <div className={styles.front}>
          <h1>{name}</h1>
        </div>
        <div className={styles.back}>
          <p>{overview?.split(" ").slice(0, 26).join(" ")} ...</p>

          <button
            className="red-btn"
            onClick={() => navigate(`/collection/${id}`)}
          >
            Watch it
          </button>
        </div>
      </div>
    </div>
  );
}
