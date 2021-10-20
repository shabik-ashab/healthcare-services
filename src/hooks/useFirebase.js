import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import { Link, useLocation, useHistory } from 'react-router-dom';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [userName,setUserName] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

 
       

    const createUserWithEmail = (name,email,password) => {
        
        
        createUserWithEmailAndPassword (auth, email, password)
        .then((result) => {
            setUser(result.user)
            console.log(result.user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/email-already-in-use') {
                alert('already registered');
               } else {
                alert(errorMessage);
                 }
        })
    }

    const setName= (name) => {
           setUserName(name)
    }
    // console.log(userName)
    const signInWithEmail = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user)
        })
        .catch((error) => {
            // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
         alert('Wrong password.');
        } else {
         alert(errorMessage);
          }
      });
    }


    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        loading,
        signInUsingGoogle,
        createUserWithEmail,
        signInWithEmail,
        userName,
        setName,
        error,
        logOut
    }
}

export default useFirebase;