import Navbar from "../../common/nav";
import styles from "./error.module.css";
import Suggest from "../../common/suggest/suggest";
import { useEffect } from "react";
import Footer from "../../common/footer";
export default function Error({setTitle}) {


  useEffect(() => {
    setTitle('404')
    return () => setTitle('Cinemana')
  },[])

  return (
    <div className="parent">
      <Navbar />
      <div className="container">
        <div className={styles.err__container}>
          <div className={styles.flex}>
            <h1>
              We're sorry, but the page you were looking for doesn't exist.
            </h1>

            <h1>404</h1>
          </div>
          <Suggest />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
