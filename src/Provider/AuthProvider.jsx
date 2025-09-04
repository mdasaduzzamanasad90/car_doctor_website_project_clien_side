import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export const Authcontex = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const googleloginprovider = new GoogleAuthProvider();
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  // sign up
  const creataccount = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

//   sign in or login
const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password)
};

// logout or sign out
const logout =()=>{
    setloading(true);
    return signOut(auth)
}

// google login or signup
const googleauth = ()=>{
  setloading(true);
  return signInWithPopup(auth, googleloginprovider)
}

//   check user ase na ki nai
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentuser=>{
        setuser(currentuser);
        console.log("current user",currentuser);
        setloading(false);
    });
    return ()=>{
        return unsubscribe();
    }
},[])

    const authinfo = {
    user,
    loading,
    creataccount,
    login,
    logout,
    googleauth,
  };

  return <Authcontex.Provider value={authinfo}>{children}</Authcontex.Provider>;
};

export default AuthProvider;
