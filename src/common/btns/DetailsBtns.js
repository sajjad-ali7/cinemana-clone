import { addDoc } from "firebase/firestore";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import FavsButton from "./FavsButton";
import WatchlistButton from "./WatchlistButton";
import { useEffect, useState } from "react";

export default function DetailsBtns({ data, id }) {
  const [user] = useAuthState(auth);
  const [loginFirst, setLoginFirst] = useState(false);

  useEffect(() => {
    if (loginFirst) {
      let timer = setTimeout(() => {
        setLoginFirst(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loginFirst]);
  let onButtonClick = async (data, ref) => {
    if (!user) return setLoginFirst(true);
    await addDoc(ref, {
      userId: user?.uid,
      id,
      itemImg: data?.poster_path || data.backdrop_path,
      itemTitle: data?.title || data?.name,
      ItemReleaseDate: data?.first_air_date || data.release_date,
      first_air_date: data.first_air_date || "",
    });
  };

  return (
    <>
      <div className="relative">
        <WatchlistButton onButtonClick={onButtonClick} data={data} id={id} />
        <FavsButton onButtonClick={onButtonClick} data={data} id={id} />
        <p
          className={`login_msg ${
            loginFirst ? "show_login_msg" : "hide_login_msg"
          }`}
        >
          You must login to perform an action
        </p>
      </div>
    </>
  );
}
