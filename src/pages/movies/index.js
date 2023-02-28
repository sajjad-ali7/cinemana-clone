import Footer from "../../common/footer";
import Navbar from "../../common/nav";
import SectionsItems from "../../common/sectionsItems";
import { MetaDecorator } from "../../helper";
export default function Movies() {
  return (
    <div className="parent">
      <MetaDecorator title={"Movies"} />
      <Navbar />
      <div className="container">
        <h1 className={"section__heading"}>Movies</h1>
        <div>
          <SectionsItems type={"movie"} get={`discover`} keyword={"movies"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
