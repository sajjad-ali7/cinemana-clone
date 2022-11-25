import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

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