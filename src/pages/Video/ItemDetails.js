import React, { useEffect, useState } from "react";
import styles from "./video.module.css";
import { useParams } from "react-router-dom";
import apiObj from "../../apiKey";
import DetailsLoading from "../../common/loading/DetailsLoading";

import DetailsBtns from "../../common/btns/DetailsBtns";
import Iframe from "./Iframe";

export default function ItemDetails() {
  let { type, id } = useParams();
  const [data, setData] = useState(null);
  const [vidSrc, setVidSrc] = useState("");
  useEffect(() => {
    // for trailers

    fetch(
      `${apiObj.baseUrl}/${type}/${id}/videos?api_key=${apiObj.KEY}&language=en-US`
    )
      .then((e) => e.json())
      .then((e) => setVidSrc(e?.results[0]?.key));
    //=============================== for details

    fetch(
      `${apiObj.baseUrl}/${type}/${id}?api_key=${apiObj.KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setData(data));

    return () => {
      setVidSrc("");
      setData(null);
    };
  }, [id, type]);

  if (!data) return <DetailsLoading />;

  let {
    title,
    release_date,
    status,
    poster_path,
    production_companies,
    overview,
  } = data;

  return (
    <>
      <div className={styles.item__container}>
        <div className={styles.image__container}>
          <img
            src={`${apiObj.imagePath}${data.backdrop_path || poster_path}`}
            alt={`${type} image`}
          />
        </div>
        <div className={styles.item__info}>
          <div className={styles.heading__wrapper}>
            <h1>{title || data.name}</h1>
            <div>
              <DetailsBtns id={id} data={data} />
            </div>
          </div>
          <p className={styles.release__date}>
            {release_date || data.first_air_date}
          </p>
          <p className={styles.status}>Status : {status || "N/A"}</p>
          <p className={styles.overview}>
            {overview || "Overview Not Availabile"}
          </p>
          {production_companies.length > 0 ? (
            <div className={styles.company}>
              <h4 className={styles.production}>
                Production
                {production_companies.length > 1 ? " Companies" : " Company"}
              </h4>
              {production_companies.map((e) => (
                <span key={e.id}>
                  <img src={`${apiObj.imagePath}${e.logo_path}`} alt="" />
                  {e.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      {vidSrc ? (
        <Iframe videoSrc={vidSrc} />
      ) : (
        <h1 className={styles.no__trailer}>No Trailer Found</h1>
      )}
    </>
  );
}
