import Footer from "../../common/footer";
import Navbar from "../../common/nav";
import Cast from "./Cast";
import ItemDetails from "./ItemDetails";
import Similar from "./Similar";
export default function Video() {
  
  return (
    <div className="parent">
      <Navbar />
      <div className="container">
        <ItemDetails />
        <Cast/>
        <Similar />
      </div>
      <Footer/>
    </div>
  );
}
