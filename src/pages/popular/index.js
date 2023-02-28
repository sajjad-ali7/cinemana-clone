import React, { useEffect, useState } from "react";
import Navbar from "../../common/nav";
import useFetch from "../../hooks/useFetch";
import Filter from "./Filter";
import Item from "../../common/sectionsItems/Item";
import HomeSliderLoading from "../../common/loading/HomeSliderLoading";
import Footer from "../../common/footer";
import { MetaDecorator } from "../../helper";

export default function Popular({setTitle}) {
  const [active, setActive] = useState("week");
  const [type, setType] = useState("movie");
  let { data, loading } = useFetch("trending", `${type}/${active}`);

  return (
    <div className={`parent`}>
      <MetaDecorator title={'Popular'}/>
      <Navbar />
      <div className="container">
        <Filter
          active={active}
          setActive={setActive}
          type={type}
          setType={setType}
        />
        <div className="flex__container">
          {loading ? (
            <>
              <HomeSliderLoading />
              <HomeSliderLoading />
              <HomeSliderLoading />
              <HomeSliderLoading />
            </>
          ) : (
            <Item data={data} />
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
