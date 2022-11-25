import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiObj from "../../apiKey";
import Navbar from "../../common/nav";
import Item from "../../common/sectionsItems/Item";

export default function Collection() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/collection/${id}?api_key=${apiObj.KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [])

  return (
    <div className="parent">
      <Navbar />
      <div className="container">
        <h1 style={{ marginTop: "30px ", fontWeight: "400" }}>{data.name}</h1>
        <div className="flex__container">
          <Item data={data.parts} />
        </div>
      </div>
    </div>
  );
}
