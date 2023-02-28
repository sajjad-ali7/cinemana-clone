import React, { useEffect } from "react";
import Footer from "../../common/footer";
import HomeSliderLoading from "../../common/loading/HomeSliderLoading";
import Navbar from "../../common/nav";
import Item from "../../common/sectionsItems/Item";
import { MetaDecorator } from "../../helper";
import useFetch from "../../hooks/useFetch";

export default function New({ setTitle }) {
  let { data, loading } = useFetch("movie", "upcoming");

  return (
    <div className="parent">
      <MetaDecorator title={"New Release"} />
      <Navbar />
      <div className="container">
        {loading ? (
          <>
            <HomeSliderLoading />
            <HomeSliderLoading />
            <HomeSliderLoading />
            <HomeSliderLoading />
          </>
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
