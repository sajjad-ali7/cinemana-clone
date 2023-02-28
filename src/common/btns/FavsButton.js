import React, { useEffect, useState } from "react";
import { getData, collectionRef } from "../../helper";
import { AiOutlineHeart } from "react-icons/ai";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function FavsButton({ onButtonClick, data, id , isLoading }) {
  const [firebaseData, setFirebaseData] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    getData("favs", setFirebaseData, user?.uid);
  }, [user]);

  let removeDoc = async () => {
    let documentId = firebaseData.find((e) => e.id === id);
    if (!documentId) return;
    await deleteDoc(doc(db, "favs", documentId.docId));
  };

  let onClick = () => {
    if (firebaseData.length > 0 && firebaseData.find((e) => e.id === id)) {
      removeDoc();
      setFirebaseData((prev) => prev.filter((e) => e.id !== id));
    } else {
      onButtonClick(data, collectionRef("favs"));
      getData("favs", setFirebaseData, user?.uid);
    }
  };

  return isLoading ? (
    <div class="lds-ring" style={{ transform: "scale(.4)" }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <button
      onClick={onClick}
      style={{
        color: firebaseData?.find((e) => e.id === id) ? "red" : "white",
      }}
    >
      <AiOutlineHeart />
    </button>
  );
}
