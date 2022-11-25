import { useEffect } from "react";
import Footer from "../../common/footer";
import Navbar from "../../common/nav";
import SectionsItems from "../../common/sectionsItems";
export default function Movies({setTitle}) {

  useEffect(() => {
    setTitle('Movies')
    return () => setTitle('Cinemana')
  },[])
  return (
    <div className="parent">
      <Navbar />
      <div className="container">
        <h1 className={'section__heading'}>Movies</h1>
        <div>
          <SectionsItems type={"movie"} get={`discover`} keyword = {'movies'} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
