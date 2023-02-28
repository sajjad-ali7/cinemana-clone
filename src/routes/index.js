import { lazy, Suspense } from "react";
const Redirect = lazy(() => import("../pages/redirect"));
const Landing = lazy(() => import("../pages/landing"));
const Home = lazy(() => import("../pages/home"));
const Popular = lazy(() => import("../pages/popular"));
const Error = lazy(() => import("../pages/Err"));
const Video = lazy(() => import("../pages/Video"));
const New = lazy(() => import("../pages/new"));
const Movies = lazy(() => import("../pages/movies"));
const Series = lazy(() => import("../pages/series"));
const Anime = lazy(() => import("../pages/anime"));
const Favs = lazy(() => import("../pages/Favs"));
const Watchlist = lazy(() => import("../pages/watchlist"));
const Search = lazy(() => import("../pages/search"));
const Collection = lazy(() => import("../pages/collection"));

const routes = (setShowElements) => {
  return [
    {
      path: "/",
      element: <Redirect />,
    },
    {
      key: 1,
      path: "/landing",
      element: (
        <Suspense fallback={"loading.."}>
          {" "}
          <Landing setShowElements={setShowElements} />
        </Suspense>
      ),
    },
    {
      key: 2,
      path: "/home",
      element: (
        <Suspense fallback="loading">
          <Home />
        </Suspense>
      ),
    },
    {
      key: 3,
      path: "/popular",
      element: (
        <Suspense fallback="loading">
          <Popular />
        </Suspense>
      ),
    },
    {
      key: 4,
      path: "/new",
      element: (
        <Suspense fallback="loading">
          <New />
        </Suspense>
      ),
    },
    {
      key: 5,
      path: "/movies",
      element: (
        <Suspense fallback="loading">
          <Movies />
        </Suspense>
      ),
    },
    {
      key: 6,
      path: "/series",
      element: (
        <Suspense fallback="loading">
          <Series />
        </Suspense>
      ),
    },
    {
      key: 7,
      path: "/anime",
      element: (
        <Suspense fallback="loading">
          <Anime />
        </Suspense>
      ),
    },
    {
      key: 8,
      path: "/video/:type/:id",
      element: (
        <Suspense fallback="loading">
          <Video />
        </Suspense>
      ),
    },
    {
      key: 9,
      path: "/favorite",
      element: (
        <Suspense fallback="loading">
          <Favs />
        </Suspense>
      ),
    },
    {
      key: 0,
      path: "/watchlist",
      element: (
        <Suspense fallback="loading">
          <Watchlist />
        </Suspense>
      ),
    },
    {
      key: 11,
      path: "/collection/:id",
      element: (
        <Suspense fallback="loading">
          <Collection />
        </Suspense>
      ),
    },
    {
      key: 22,
      path: "/search/:q",
      element: (
        <Suspense fallback="loading">
          <Search />
        </Suspense>
      ),
    },
    {
      key: 33,
      path: "*",
      element: (
        <Suspense fallback="loading">
          <Error />
        </Suspense>
      ),
    },
  ];
};

export default routes;
