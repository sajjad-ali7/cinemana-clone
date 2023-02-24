import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../apiKey";
import { addData } from "../redux/features/heroSliderSlice";
function useFetch(typee, category, hero) {
  let dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${api.baseUrl}/${typee}/${category}?api_key=${api.KEY}&language=en-US`
      )
      .then((res) => {
        setData(res.data.results);
        if (hero === "hero") {
          dispatch(addData(res.data.results));
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      })
      .finally((e) => setLoading(false));
  }, [typee, category, dispatch]);

  return { loading, error, data };
}

export default useFetch;
//sssssssss