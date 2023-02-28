import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { Helmet } from "react-helmet";

export const ratingColor = (rating, styleFile) => {
  if (rating < 5.5) return `${styleFile.red}`;
  if (rating > 5.5 && rating < 7) return `${styleFile.yellow}`;
  if (rating >= 7) return `${styleFile.green}`;
};

export const slideItemClasses = (deviceWidth, styleFile) => {
  return ` ${styleFile["slide__item"]} ${
    deviceWidth === 20 ? styleFile["large__screen"] : styleFile["small__screen"]
  }`;
};

export const slideDotsClasses = (active, num, styleFile) => {
  return active === num ? styleFile.active : "";
};

//move to film or series page
export const whenItemClicked = (e, navigate) => {
  let type = e.first_air_date ? "tv" : "movie";
  let id = e.id;
  navigate(`/video/${type}/${id}`);
};

//select ref

export let collectionRef = (refName) => collection(db, refName);

// fetching data from firestore
export const getData = async (refName, setData, userId) => {
  let ref = collection(db, refName);
  const data = await getDocs(ref);
  // setData(data.docs.map((doc) => ({ ...doc.data(), docId: doc.id })));
  let filter = data.docs
    .map((doc) => ({ ...doc.data(), docId: doc.id }))
    .filter((e) => e.userId === userId);
  setData(filter);
};

export const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:url" content={window.location.href} />
    <meta name="whatsapp:card" content="summary_large_image" />
    <meta name="whatsapp:image:alt" content={imageAlt} />
  </Helmet>
);
