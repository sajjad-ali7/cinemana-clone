import React, { useEffect } from "react";
import Navbar from "../../common/nav";
import SectionsItems from "../../common/sectionsItems";
import Footer from "../../common/footer";
import { MetaDecorator } from "../../helper";
export default function Anime() {
  return (
    <div className="parent">
      <MetaDecorator title={"Anime"} />
      <Navbar />
      <div className="container">
        <h1 className={"section__heading"}>Anime</h1>
        <div>
          <SectionsItems
            type={"tv"}
            get={`discover`}
            keyword={"animation"}
            genre="16"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
