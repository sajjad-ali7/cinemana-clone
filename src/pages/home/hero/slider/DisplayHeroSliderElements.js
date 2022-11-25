import HeroSliderElement from "./HeroSliderElement";
import useFetch from "../../../../hooks/useFetch";
import HeroLoading from "../../../../common/loading/HeroLoading";

export default function DisplayHeroSliderElements() {

  let { loading, data, error } = useFetch("movie", "popular", "hero");


  let map = data?.map((e, i) => (
    <HeroSliderElement
      id={i}
      key={e.id}
      backdropPath={e.backdrop_path}
      name={e.title}
    />
  ));

  if (loading) return <HeroLoading />;

  if (error) return <h1>something went wrong ...</h1>;

  return <>{map}</>;
}
