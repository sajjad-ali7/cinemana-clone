import styles from './loading.module.css'

export default function DetailsLoading() {
  return (
    <div className={styles.details}>
        
        <div className={styles.left}></div>
        <div className={styles.right}>
            <h1 className={styles.heading}></h1>
            <p className={styles.p}></p>
            <p className={styles.p}></p>
            <p className={styles.p}></p>
            <p className={styles.p}></p>
            <p className={styles.p}></p>
        </div>
    </div>
  )
}
