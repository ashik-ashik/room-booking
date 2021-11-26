import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    // google login
  const googleLogIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider)
      
  };


  // email password registration
  const handelName =(e) => {
    setName(e.target.value)
  }
  const handelEmail =(e) => {
      setEmail(e.target.value)
  }
  const handelPassword =(e) => {
      setPassword(e.target.value)
  }
  const register = (e) => {
    
      if(name && email && password.length >=6 ){
        setEmail(email);
        setPassword(password);
        return emailRegister();
      }
  }
  const emailRegister = () => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)

  }

  // update username
  const updateUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      setError(error.message)
    });
    
  } 

  // email passowrd login
  const handelLogIn = (e) => {    
      if(email && password?.length >=6){
        return  emailLogIn();
        }
  }
  const emailLogIn = () => {
    setLoading(true);
    
    return signInWithEmailAndPassword(auth, email, password);
    
  }

//   monitoring user login/ log out
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
        setLoading(false);
      });
      return unSubscribe;
  }, []);

//   logout
  const logOut = () => {
      setLoading(true)
    signOut(auth).then(() => {
        setUser(null);
      }).catch((error) => {
        
      }).finally(()=>{
          setLoading(false)
      });
  }

  // console.log(user?.displayName)
  
  return {
      user,
      setUser,
      isLoading,
      setLoading,
      error,
      googleLogIn,
      register,
      updateUserName,
      logOut,
      handelName,
      handelEmail,
      handelPassword,
      handelLogIn,
      setEmail,
      setPassword,
      setName,
  }
}

export default useFirebase;