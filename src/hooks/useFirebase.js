import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from '../Firebase/firebase.init';

// call back  InitializeFirebase
// initializeFirebase();
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  // Google Sign IN or Sign Up
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
        setError(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //setting the user
        setUser(user);
      } else {
        //user is not signed in
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // Login Or Sign Up Using Email & Pass
  // Handle all input Filed funtion
  const handlePassword = (event) => {
    setPass(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const toggleLogin = (event) => {
    setIsLogin(!event.target.checked);
  };

  // Reset Password
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {})
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  useEffect(() => {
    fetch(`https://rocky-sands-89317.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    signInWithGoogle,
    logOut,
    handlePassword,
    handleEmail,
    handleNameChange,
    handleResetPassword,
    setError,
    setUser,
    handleName,
    setIsLoading,
    toggleLogin,
    isLogin,
    isLoading,
    error,
    email,
    pass,
    name,
    admin,
    setAdmin,
    token,
    setToken,
  };
};

export default useFirebase;
