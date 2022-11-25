import styles from "../hero.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { toggleSlide } from "../../../../redux/features/heroSliderSlice";
import { useDispatch } from "react-redux";

export default function Arrows() {
  let dispatch = useDispatch();

  return (
    <div className={styles["arrows__container"]}>
      <button onClick={() => dispatch(toggleSlide({dec: true}))}>
        <AiOutlineArrowLeft />
      </button>
      <button onClick={() => dispatch(toggleSlide({inc: true}))}>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
}
