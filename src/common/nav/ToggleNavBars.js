import { useDispatch } from "react-redux";
import { toggleAside } from "../../redux/features/asideSlice";
import { FaBars} from "react-icons/fa";

export default function ToggleNavBarse() {
  let dispatch = useDispatch();

  return (
    <span onClick={() => dispatch(toggleAside(true))} className="bars_hide">
      <FaBars />
    </span>
  );
}
