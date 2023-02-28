import Navbar from "../../common/nav";
import styles from "./error.module.css";
import Suggest from "../../common/suggest/suggest";
import Footer from "../../common/footer";
import { MetaDecorator } from "../../helper";
export default function Error() {
  return (
    <div className="parent">
      <MetaDecorator title={"404"} />
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
      <Footer />
    </div>
  );
}
