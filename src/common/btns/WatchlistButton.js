import React, { useEffect, useState } from "react";
import { getData, collectionRef } from "../../helper";
import { MdSubscriptions } from "react-icons/md";
import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function WatchlistButton({ onButtonClick, data, id }) {
  const [firebaseData, setFirebaseData] = useState([]);
  const [user] = useAuthState(auth)
  useEffect(() => {
    getData("watchlist", setFirebaseData , user?.uid);
  }, [user]);


  let removeDoc = async () => {
    let documentId = firebaseData.find((e) => e.id === id);
    if(!documentId) return 
    await deleteDoc(doc(db, "watchlist", documentId.docId));
  };


  let onClick = () => {
      if (firebaseData.length > 0 && firebaseData.find((e) => e.id === id)) {
        removeDoc();
        setFirebaseData((prev) => prev.filter((e) => e.id !== id));
      }else{
        onButtonClick(data, collectionRef("watchlist"));
        getData("watchlist", setFirebaseData, user?.uid)
      }
    
  };

  return (
    <button
      onClick={onClick}
      style={{
        color: firebaseData?.find((e) => e.id === id) ? "red" : "white",
      }}
    >
      <MdSubscriptions />
    </button>
  );
}
