import Suggest from "../../common/suggest/suggest";
import styles from './index,module.css'
export default function NothingFound() {
  return (
    <div className={`${styles.nothing__found} nothing__found`}>
        <img src="/images/no-result-search.svg" alt="" />
        <h1><span>Sorry</span>, no results found</h1>

        <Suggest/>
    </div>
  )
}
