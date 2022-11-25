import axios from "axios";
import { useEffect, useState } from "react";
import api from "../apiKey";

function useMoviesFetch(type = 'movie', second='discover', pageNum = 1, keyword = '' , genre='') {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${api.baseUrl}/${second}/${type}?api_key=${api.KEY}&language=en-US&sort_by=popularity.desc&page=${pageNum}&with_genres=${genre}&with_keywords=${keyword}`
      )
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      })
      .finally((e) => setLoading(false));
    }, [type, second, pageNum, genre, keyword]);
    
  return { loading, error, data };
}

export default useMoviesFetch;
