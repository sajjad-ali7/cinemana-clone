import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiObj from "../../apiKey";
import Footer from "../../common/footer";
import Navbar from "../../common/nav";
import Item from "../../common/sectionsItems/Item";
import { MetaDecorator } from "../../helper";
import NothingFound from "./NothingFound";

export default function Search() {
  let { q } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiObj.KEY}&language=en-US&query=${q}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results?.filter((e) => e.gender === undefined));
      });

    return () => setData([]);
  }, [q]);

  return (
    <div className="parent col">
      <MetaDecorator title={"Search"} />
      <Navbar />
      <div className="container">
        {data.length === 0 ? (
          <NothingFound />
        ) : (
          <div className="flex__container">
            <Item data={data} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
