import styles from "./nav.module.css";
import ToggleNavBars from "./ToggleNavBars";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { useNavigate } from "react-router-dom";
import apiObj from "../../apiKey";
export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    if (searchInput !== "") {
      let searchCounter = setTimeout(() => {
        fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${apiObj.KEY}&language=en-US&query=${searchInput}&page=1&include_adult=false`
        )
          .then((res) => res.json())
          .then((data) => {
            setSearchData(data.results?.filter((e) => e.gender === undefined));
          });
      }, 500);

      return () => {
        clearTimeout(searchCounter);
        setSearchData([]);
      };
    }
  }, [searchInput]);

  let onFormSubmit = (e) => {
    e.preventDefault();
    if(searchInput !== ""){
      navigate(`/search/${searchInput}`)
    }
    setSearchInput('')
  };

  return (
    <>
      <form
        className={styles["search__form"]}
        onSubmit={(e) => onFormSubmit(e)}
      >
        <ToggleNavBars />
        <span>
          <FaSearch />
        </span>
        <input
          type="search"
          id={styles.search}
          placeholder="Search movies & series"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          autoComplete='off'
          autoCorrect='off'
        />
        {searchData.length > 0 ? (
          <SearchResult q={searchInput} data={searchData.slice(0, 5)} />
        ) : null}
      </form>
    </>
  );
}
