import { auth, provider , faceProvider} from "../../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginBtns() {
  const navigate = useNavigate();

  let signInWithGoogle = async () => {
     await signInWithPopup(auth, provider);
    navigate('/home')
  };

  let signInWithFacebook = async () => {
     await signInWithPopup(auth, faceProvider);
    navigate('/home')
  };

  return (
    <>
      <button onClick={signInWithFacebook}>
        <FaFacebookF /> Login with Facebook
      </button>
      <button onClick={signInWithGoogle}>
        <FaGoogle /> Login with Google
      </button>
    </>
  );
}
