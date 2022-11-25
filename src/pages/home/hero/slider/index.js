import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./hero_slider.module.css";
import { autoSlide } from "../../../../redux/features/heroSliderSlice";
import DisplayHeroSliderElements from "./DisplayHeroSliderElements";
import SlideDots from "./SlideDots";
// check the device width to show 5 or 4 elements in the slider
export let deviceWidth = window.innerWidth >= 767 ? 20 : 25;

export default function HeroSlider() {
  let dispatch = useDispatch();
  let { index, move } = useSelector((state) => state.heroSlider);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (index % 4 === 0) setActive(index);
    if (index === 16 && move === 20) {
      // dont delete
    } else {
      let counter = setTimeout(() => dispatch(autoSlide()), 5000);

      return () => clearTimeout(counter);
    }
  }, [index, move, dispatch]);

  return (
    <div>
      <div className={styles.slider}>
        <div
          className={styles.transform}
          style={{ transform: `translateX(-${index * deviceWidth}%)` }}
        >
          <DisplayHeroSliderElements />
        </div>
      </div>

      {deviceWidth === 25 ? (
        <SlideDots active={active} setActive={setActive} />
      ) : null}
    </div>
  );
}
