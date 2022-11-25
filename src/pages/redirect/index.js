import { useNavigate } from "react-router-dom";
import {auth} from '../../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useEffect } from "react";
export default function Redirect() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(() => {
    user ? navigate("/home") : navigate("/landing")
  }, [])
}
