import { useState } from 'react'
import styles from './index.module.css'

export default function PaginationDots({pageNum , setNum}) {
    let nextClick = () => {
        if (pageNum === 7) return;
        setNum((prev) => prev + 1);
      };
      let prevClick = () => {
        if (pageNum === 1) return;
        setNum((prev) => prev - 1);
      };
  return (
    <ul>
          <li>
            <button className="red-btn" onClick={prevClick}>
              Prev
            </button>
          </li>
          <li
            className={`${styles.nums} ${pageNum === 1 ? styles.active : ""}`}
            onClick={(e) => setNum(1)}
          >
            1
          </li>
          <li
            className={`${styles.nums} ${pageNum === 2 ? styles.active : ""}`}
            onClick={(e) => setNum(2)}
          >
            2
          </li>
          <li
            className={`${styles.nums} ${pageNum === 3 ? styles.active : ""}`}
            onClick={(e) => setNum(3)}
          >
            3
          </li>
          <li
            className={`${styles.nums} ${pageNum === 4 ? styles.active : ""}`}
            onClick={(e) => setNum(4)}
          >
            4
          </li>
          <li
            className={`${styles.nums} ${pageNum === 5 ? styles.active : ""}`}
            onClick={(e) => setNum(5)}
          >
            5
          </li>
          <li
            className={`${styles.nums} ${pageNum === 6 ? styles.active : ""}`}
            onClick={(e) => setNum(6)}
          >
            6
          </li>
          <li
            className={`${styles.nums} ${pageNum === 7 ? styles.active : ""}`}
            onClick={(e) => setNum(7)}
          >
            7
          </li>
          <li>
            <button className="red-btn" onClick={nextClick}>
              Next
            </button>
          </li>
        </ul>
  )
}
