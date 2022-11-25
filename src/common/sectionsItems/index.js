import styles from "./index.module.css";
import useMoviesFetch from "../../hooks/useMoviesFetch";
import { useState } from "react";
import PaginationDots from "./PaginationDots";
import Item from "./Item";
import HomeSliderLoading from "../loading/HomeSliderLoading";
export default function SectionsItems({ type, get, keyword, genre }) {
  const [pageNum, setPageNum] = useState(1);

  let { data, loading } = useMoviesFetch(type, get, pageNum, keyword, genre);

  if (loading) return <HomeSliderLoading />


  if (data.length === 0) return <h1>error</h1>;

  return (
    <>
      <div className="flex__container">
        <Item data={data} />
      </div>
      <div className={styles.pagination}>
        <PaginationDots pageNum={pageNum} setNum={setPageNum} />
      </div>
    </>
  );
}
