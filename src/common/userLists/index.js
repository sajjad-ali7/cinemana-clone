import { useEffect, useState } from "react";
import HomeSliderLoading from "../../common/loading/HomeSliderLoading";
import ListItems from "./ListItems";
import EmptyList from "./EmptyList";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import LogInMsg from "./LogInMsg";
import { getData } from "../../helper";

export default function UserLists({ refName, name }) {
  const [data, setData] = useState(null);
  const [user] = useAuthState(auth);
  
  useEffect(() => {
    if (user?.uid) getData(refName, setData, user.uid);
  }, [user]);

  if (!user) return <LogInMsg />;

  if (data?.length === 0) return <EmptyList name={name} />;

  return !data ? <HomeSliderLoading /> : <ListItems data={data} />;
}
