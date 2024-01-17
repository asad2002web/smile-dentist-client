import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user 
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // sing in user
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }


  // logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth)
  }


  // update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })

  }
  // auth state Change 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unSubscribe()
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    singIn,
    logoutUser,
    updateUserProfile
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider