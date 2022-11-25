import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC-LVhPkVShkcHlHc1DoJqA9fOP_--2HjY",
  authDomain: "cinemana-7e742.firebaseapp.com",
  projectId: "cinemana-7e742",
  storageBucket: "cinemana-7e742.appspot.com",
  messagingSenderId: "1081158723243",
  appId: "1:1081158723243:web:30089ad7fdf74d9dc539ee",
  measurementId: "G-4E0TXL0880",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const faceProvider = new FacebookAuthProvider();
export const db = getFirestore(app)