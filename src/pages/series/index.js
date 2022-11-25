import React, { useEffect } from "react";
import Footer from "../../common/footer";
import Navbar from "../../common/nav";
import SectionsItems from "../../common/sectionsItems";

export default function Series({setTitle}) {

  useEffect(() => {
    setTitle('Series')
    return () => setTitle('Cinemana')
  },[])

  return (
    <div className="parent">
      <Navbar />
      <div className="container">
      <h1 className={'section__heading'}>Series</h1>
        <div>
          <SectionsItems type={"tv"} get={`discover`} keyword = {'series'} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
