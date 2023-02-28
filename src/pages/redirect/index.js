import { useNavigate, redirect } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Redirect() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  return user ? navigate("/home") : redirect("/landing");
}
