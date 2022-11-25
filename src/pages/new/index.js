import React, { useEffect } from "react";
import Footer from "../../common/footer";
import HomeSliderLoading from "../../common/loading/HomeSliderLoading";
import Navbar from "../../common/nav";
import Item from "../../common/sectionsItems/Item";
import useFetch from "../../hooks/useFetch";

export default function New({setTitle}) {
  let { data, loading } = useFetch("movie", "upcoming");
  
  useEffect(() => {
    setTitle('New Release')
    return () => setTitle('Cinemana')
  },[])
  return (
    <div className="parent">
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
      <Footer/>
    </div>
  );
}
