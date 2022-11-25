import styles from './loading.module.css'

export default function HomeSliderLoading() {
  return (
    <div className={styles.parent}>
         <div className={styles.home__slider}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
    </div>
    </div>
   
  )
}
