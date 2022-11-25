import Suggest from "../suggest/suggest";
import styles from './userlist.module.css'

export default function EmptyList({name}) {
  return (
    <div className={styles.image__container}>
      <img src="/images/no-result-watchlist.svg" alt="image" />
      <h1>
        <span>Your </span> {name} is empty
      </h1>
      <Suggest />
    </div>
  );
}
