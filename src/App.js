import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Redirect from "./pages/redirect";
import Aside from "./common/aside";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Popular from "./pages/popular";
import Error from "./pages/Err";
import AsideModal from "./modal";
import { useSelector } from "react-redux";
import Video from "./pages/Video";
import New from "./pages/new";
import Movies from "./pages/movies";
import Series from "./pages/series";
import Anime from "./pages/anime";
import Favs from "./pages/Favs";
import Watchlist from "./pages/watchlist";
import Search from "./pages/search";
import Collection from "./pages/collection";

function App() {
  const [showElements, setShowElements] = useState(true);
  const [title , setTitle] = useState('Cinemana')
  let { increaseSize } = useSelector((state) => state.aside.value);

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <div className={`App ${increaseSize ? "increase" : "decrease"}`}>
      <Router>
        <AsideModal />
        {showElements ? <Aside /> : ""}
        <Routes>
          <Route path="/" element={<Redirect />} />
          <Route
            path="/landing"
            element={<Landing showElements={setShowElements} />}
          />
          <Route path="/home" element={<Home  setTitle={setTitle}/> } />
          <Route path="/popular" element={<Popular  setTitle={setTitle}/>} />
          <Route path="/new" element={<New  setTitle={setTitle} />} />
          <Route path="/movies" element={<Movies  setTitle={setTitle}/>} />
          <Route path="/series" element={<Series  setTitle={setTitle}/>} />
          <Route path="/anime" element={<Anime  setTitle={setTitle}/>} />
          <Route path="/video/:type/:id" element={<Video  setTitle={setTitle}/>} />
          <Route path="/favorite" element={<Favs  setTitle={setTitle}/>} />
          <Route path="/watchlist" element={<Watchlist  setTitle={setTitle}/>} />
          <Route path="/collection/:id" element={<Collection  />} />
          <Route path="/search/:q" element={<Search  setTitle={setTitle}/>} />
          <Route path="*" element={<Error setTitle={setTitle}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
