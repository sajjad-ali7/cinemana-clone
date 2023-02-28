import Redirect from "../pages/redirect";
import Landing from "../pages/landing";
import Home from "../pages/home";
import Popular from "../pages/popular";
import Error from "../pages/Err";
import Video from "../pages/Video";
import New from "../pages/new";
import Movies from "../pages/movies";
import Series from "../pages/series";
import Anime from "../pages/anime";
import Favs from "../pages/Favs";
import Watchlist from "../pages/watchlist";
import Search from "../pages/search";
import Collection from "../pages/collection";

const routes = (setShowElements) => {
  return [
    {
      path: "/",
      element: <Redirect />,
    },
    {
      key: 1,
      path: "/landing",
      element: <Landing setShowElements={setShowElements} />,
    },
    { key: 2, path: "/home", element: <Home /> },
    { key: 3, path: "/popular", element: <Popular /> },
    { key: 4, path: "/new", element: <New /> },
    { key: 5, path: "/movies", element: <Movies /> },
    { key: 6, path: "/series", element: <Series /> },
    { key: 7, path: "/anime", element: <Anime /> },
    { key: 8, path: "/video/:type/:id", element: <Video /> },
    { key: 9, path: "/favorite", element: <Favs /> },
    { key: 0, path: "/watchlist", element: <Watchlist /> },
    { key: 11, path: "/collection/:id", element: <Collection /> },
    { key: 22, path: "/search/:q", element: <Search /> },
    { key: 33, path: "*", element: <Error /> },
  ];
};

export default routes;
