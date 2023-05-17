import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    toast.error("An error occurred");
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    toast.error(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.alert("Password reset link sent!");
  } catch (err) {
    toast.error(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const addToFave = async (breed) => {
  const user = getAuth().currentUser;

  try {
    if (user) {
      const { uid } = user;
      const favoritesRef = collection(db, "favourites");
      const querySnapshot = await getDocs(
        query(
          favoritesRef,
          where("uid", "==", uid),
          where("breed", "==", breed)
        )
      );

      if (querySnapshot.empty) {
        await addDoc(favoritesRef, {
          breed,
          uid,
        });
      } else {
        toast.error(`${breed} already exists in favorites`);
      }
    } else {
      toast.error("No user signed in");
    }
  } catch (error) {
    toast.error("No user signed in");
  }
};

const getFaves = async () => {
  const user = getAuth().currentUser;
  const favouritesData = [];

  try {
    if (user) {
      const { uid } = user;
      const q = query(collection(db, "favourites"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        favouritesData.push(doc.data());
      });
    }
  } catch (error) {
    toast.error(error);
  }

  return favouritesData;
};

export {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  useAuthState,
  addToFave,
  getFaves,
};
