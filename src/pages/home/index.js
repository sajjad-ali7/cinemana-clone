import { useEffect } from "react";
import Footer from "../../common/footer";
import Navbar from "../../common/nav";
import { MetaDecorator } from "../../helper";
import Collection from "./collections";
import Hero from "./hero";
import HomeSlider from "./homeSliders";

export default function Home() {
  return (
    <div className={`parent`}>
      <MetaDecorator title={"Home"} />
      <Navbar />
      <div>
        <Hero />
        <div className={`container padding`}>
          <div>
            <HomeSlider
              slidername={"Top Rated Movies"}
              searchKeys="top_rated"
              dataType={"movie"}
            />
            <HomeSlider
              slidername={"Top Rated Series"}
              dataType={"tv"}
              searchKeys="top_rated"
            />
            <HomeSlider
              slidername={"Popular Tv Series"}
              dataType={"tv"}
              searchKeys="popular"
            />
            <HomeSlider
              slidername={"Trending Movies"}
              dataType={"trending"}
              searchKeys="movie/week"
            />
            <HomeSlider
              slidername={"Trending Tv Series"}
              dataType={"trending"}
              searchKeys="tv/week"
            />
          </div>

          <Collection/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
